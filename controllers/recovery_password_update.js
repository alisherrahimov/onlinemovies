import {users_model} from "../database/models/users_model";
import bcrypt from "bcrypt";

const recovery_password_update = async (req, res) => {
    const {code, email} = req.body;
    try {
        const get_user_id = await users_model.find({email})
        const pass = bcrypt.hashSync(code, 10)
        const update_password = await users_model.findByIdAndUpdate(get_user_id[get_user_id.length - 1]._id, {password: pass})
        res.status(200).json({success: true, data: "Password update"})
    } catch (e) {
        res.status(500).json({success: false, data: e})
    }
}
export {recovery_password_update}
