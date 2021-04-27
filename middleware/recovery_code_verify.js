import {recovery_code_model} from "../database/models/recovery_code_with_email";


const recovery_code_verify = async (req, res, next) => {
    const {email, code} = req.body

    try {
        const user = await recovery_code_model.find({email})
        if (user.length - 1) {
            if (user[user.length - 1].code === code && user[user.length - 1].email === email) {
                req.email = email
                next()
            } else {
                res.status(400).json({success: false, data: "Password wrong"})
            }
        } else {
            res.status(400).json({success: false, data: "Error recovery"});
        }
    } catch (e) {
        res.status(500).json({success: false, data: e})
    }
}
export {recovery_code_verify}
