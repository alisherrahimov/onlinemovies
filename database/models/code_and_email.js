import mongoose, {Schema} from "mongoose";

const code_and_email_Schema = mongoose.Schema({
    code: {type: Schema.Types.String, required: true},
    email: {type: Schema.Types.String, required: true}
}, {timestamp: true})

const code_and_email = mongoose.model("code_and_email", code_and_email_Schema)
export {code_and_email}
