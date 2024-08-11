import express from 'express';
import cookieParser from "cookie-parser";
import authRouter from '../routes/authRoute.js';
import vehicleRouter from '../routes/vehicleRoute.js';
import { connectDB } from "../helpers/dbController.js";
import { authverify } from '../middleware/authMiddleware.js';
import { config } from "dotenv";
import multer from 'multer';
import bodyParser from "body-parser";
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
app.set('view engine', 'ejs');
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/motorgrader", (req, res) => {
    res.render("motorgrader.ejs");
});
app.get("/asphaltpaver", (req, res) => {
    res.render("asphaltpaver.ejs");
});
app.get("/backhoeloader", (req, res) => {
    res.render("backhoeloader.ejs");
});
app.get("/excavator", (req, res) => {
    res.render("excavator.ejs");
});
app.get("/doser", (req, res) => {
    res.render("doser.ejs");
});
app.get("/configpage", (req, res) => {
    res.render("configpage.ejs");
});
app.get("/solution", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;
    const d = req.query.d;
    res.render("solution.ejs", { engine: b, fuel: d, drive: c, misc: a });
});
app.get("/consult", (req, res) => {
    res.render("consult.ejs");
});
app.get("/book", (req, res) => {
    res.render("contactUs.ejs");
});
app.get("/index", (req, res) => {
    res.render("index.ejs");
});
const port = 3001;
app.get('/', authverify, (_req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => console.log(`Auth Server port ${port}!`));
