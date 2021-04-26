import jwt from "jsonwebtoken"

const header_token_check = async (req, res, next) => {
    const auth_header = req.headers.authorization;
    try {
        if (auth_header) {
            const token = auth_header.split(" ")[1]
            console.log(token)
            const user = await jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({success: false, data: "Such user is not registered"})
                } else {
                    next()
                }
            })

        }

    } catch (e) {
        res.status(401).json({success: false, data: e})
    }

}
export {header_token_check}
