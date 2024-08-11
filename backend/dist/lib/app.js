import express from 'express';
import cookieParser from "cookie-parser";
import authRouter from '../routes/authRoute.js';
import vehicleRouter from '../routes/vehicleRoute.js';
import { connectDB } from "../helpers/dbController.js";
import { authverify } from '../middleware/authMiddleware.js';
import { config } from "dotenv";
import multer from 'multer';
import passport from '../middleware/passportSetup.mjs';
import session from "express-session";
const app = express();
config();
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(multer().none());
app.use(express.json());
app.use(cookieParser());
app.use(authRouter);
app.use(vehicleRouter);
connectDB();
const port = 3001;
app.get('/', authverify, (_req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => console.log(`Auth Server port ${port}!`));
