import mongoose from "mongoose";
import bcrypt from "bcrypt";
import pkg from 'validator';
const { isEmail } = pkg;
interface user {
    username: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    lastVisit: Date,
    vehicles: mongoose.Schema.Types.Array,
}

const userSchema = new mongoose.Schema<user>({
    "username": {
        type: String,
        required: [true, 'Please enter an email'],
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
    "createdAt": {
        type: Date,
        required: true
    },
    "updatedAt": {
        type: Date,
        required: true
    },
    "lastVisit": {
        type: Date,
        required: true
    },
    "vehicles": {
        type: mongoose.Schema.Types.Array,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password.toString(), salt);
    next();
});

const User = mongoose.model('user', userSchema);

export default User;