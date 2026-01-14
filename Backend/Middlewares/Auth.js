import jwt from 'jsonwebtoken'
const ensureAuthentiiacted = (req, res, next) => {
    const auth = req.headers['authorization']
    if (!auth) {
        return res.status(401).json({ message: "Unauthorized, JWT token is requireed" })
    }
    try {
        const decode = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decode;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Unauthorized, JWT token is wrong or expired" })
    }
}
export default ensureAuthentiiacted;