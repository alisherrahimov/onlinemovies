import {users_model} from "../database/models/users_model";
import bcrypt from "bcrypt";

const recovery_password_update = async (req, res) => {
    const {code} = req.body;
    const email = req.email
    try {
        const get_user_id = await users_model.find({email})[0]._id
        const pass = bcrypt.hash(code, 10)
        const update_password = await users_model.findByIdAndUpdate(get_user_id, {password: pass})
        res.status(200).json({success: true, data: "Password update"})
    } catch (e) {
        res.status(500).json({success: false, data: e})
    }
}
export  {recovery_password_update}
