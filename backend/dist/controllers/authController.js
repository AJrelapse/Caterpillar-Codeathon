import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import Contact from "../models/contact.js";
export async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email }).exec();
    console.log(user);
    if (!user) {
        res.status(404).send("User Doesn't Exists");
        return;
    }
    const loggingUser = await bcrypt.compare(password, user.password);
    if (!loggingUser) {
        res.status(401).send("Incorrect Password");
        return;
    }
    console.log(loggingUser);
    const user_id = user._id;
    const token = jwt.sign({ user_id }, 'This is supposed to be secret , made with <3 by tba', { expiresIn: '180d' });
    res.cookie('X-Auth-Token', token, { maxAge: 86400000 });
    res.send({ token, user_id });
}
export function logout(_req, res) {
    res.cookie('X-Auth-Token', '', { maxAge: 1 });
    res.send("Logout Successful");
}
export async function signup(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const createdAt = new Date();
    const updatedAt = new Date();
    console.log(req.body);
    if (await User.exists({ email })) {
        res.status(400).send("User Already Exists");
    }
    else {
        try {
            const usr = await User.create({
                username,
                password,
                email,
                createdAt,
                updatedAt,
            });
            const user_id = usr._id;
            const token = jwt.sign({ user_id }, 'This is supposed to be secret , made with <3 by tba', { expiresIn: '180d' });
            res.cookie('X-Auth-Token', token, { maxAge: 86400000 });
            res.status(201).json({ token, usr });
        }
        catch (err) {
            res.status(500).send(err.message);
        }
    }
}
export const resetPassword = async (req, res) => {
    const user = req.params["user"];
    const owner_tkn = jwt.verify(req.params["token"], process.env.SECRET_KEY);
    const owner = await User.findById(owner_tkn.user_id);
    if (!owner) {
        res.status(404).send("User Not Found");
        return;
    }
    console.log(owner._id);
    console.log(new mongoose.Types.ObjectId(user));
    if (owner._id.toString() != new mongoose.Types.ObjectId(user).toString()) {
        res.status(400).send("Invalid User");
        return;
    }
    const password = req.body["password"];
    const confirm_password = req.body["confirm_password"];
    if (password != confirm_password) {
        res.status(400).send("Passwords do not match");
        return;
    }
    try {
        owner.password = password;
        await owner.save();
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error Resetting Password");
        return;
    }
    res.status(200).json({ message: 'Password reset successful' });
};
export const changePassword = async (req, res) => {
    const owner_tkn = jwt.verify(req.cookies["X-Auth-Token"], process.env.SECRET_KEY);
    const owner = await User.findById(owner_tkn.user_id);
    if (!owner) {
        res.status(404).send("User Not Found");
        return;
    }
    const old_password = req.body["old_password"];
    const new_password = req.body["new_password"];
    const confirm_password = req.body["confirm_password"];
    if (new_password != confirm_password) {
        res.status(400).send("Passwords do not match");
        return;
    }
    const validPassword = await bcrypt.compare(old_password, owner.password);
    if (!validPassword) {
        res.status(400).send("Incorrect Password");
        return;
    }
    try {
        owner.password = new_password;
        await owner.save();
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error Changing Password");
        return;
    }
    res.status(200).json({ message: 'Password changed successfully' });
};
export const contactUs = async (req, res) => {
    const data = { ...req.body };
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const password = data.password;
    const booking = new Date(data.book);
    console.log({
        name,
        email,
        phone,
        password,
        booking,
    });

    console.log(data);
    if (!name || !email || !phone || !password || !booking) {
        res.status(400).send("Please fill all the fields");
        return;
    }
    try {
        console.log(email);
        const contact = await Contact.create({
            name,
            email,
            phone,
            password,
            booking,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error Submitting Form");
        return;
    }
    res.status(200).send("Email Sent");
};
