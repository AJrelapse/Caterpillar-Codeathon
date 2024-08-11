"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'tba235854@gmail.com',
        pass: process.env.APP_PASSWD
    }
});
const mailOptions = {
    from: "tba235854@gmail.com",
    to: "hemanthraja2004@gmail.com",
    subject: 'Hello World',
    text: 'Hi Hemanth'
};
for (let i = 0; i < 1; i++) {
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        }
        else {
            console.log("Email sent successfully");
        }
        console.log(data);
    });
}
