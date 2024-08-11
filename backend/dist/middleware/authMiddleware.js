import jwt from "jsonwebtoken";
export function authverify(req, res, next) {
    const incomimg_token = req.cookies;
    if (!incomimg_token) {
        res.json({ "error": "No token found" });
        return;
    }
    if (!incomimg_token['X-Auth-Token']) {
        res.json({ "error": "No token found" });
        return;
    }
    jwt.verify(incomimg_token['X-Auth-Token'], 'This is supposed to be secret , made with <3 by tba', (err, _decodedtoken) => {
        if (err) {
            res.json({ "error": "Invalid token" });
            return;
        }
        else {
            next();
        }
    });
    return;
}
