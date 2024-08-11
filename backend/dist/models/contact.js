import mongoose from "mongoose";
import bcrypt from "bcrypt";
import pkg from 'validator';
const { isEmail } = pkg;
const userSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, 'Please enter an name'],
        unique: true,
        lowercase: true
    },
    "email": {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
    },
    "password": {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 8 characters']
    },
    "booking": {
        type: Date,
        required: true
    }
});
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password.toString(), salt);
    next();
});
const Contact = mongoose.model('contact', userSchema);
export default Contact;
