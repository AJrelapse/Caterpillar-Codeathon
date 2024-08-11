import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authverify(req: Request, res: Response, next: Function): void {
    const incomimg_token = req.cookies;
    if (!incomimg_token) {
        // res.redirect("/signup");
        res.json({ "error": "No token found" });
        return;
    }
    if (!incomimg_token['X-Auth-Token']) {
        // res.redirect("/login");
        res.json({ "error": "No token found" });
        return;
    }
    jwt.verify(incomimg_token['X-Auth-Token'], 'This is supposed to be secret , made with <3 by tba', (err: any, _decodedtoken: any) => {
        if (err) {
            // res.redirect("/login");
            res.json({ "error": "Invalid token" });
            return;
        }
        else {
            // console.log(decodedtoken);
            next();
        }
    });
    return;
}

