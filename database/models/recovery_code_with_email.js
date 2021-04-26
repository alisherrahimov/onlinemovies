import mongoose from "mongoose";

const recovery_code_with_emailSchema = mongoose.Schema({
    email: {type: mongoose.Schema.Types.String, required: true},
    code: {type: mongoose.Schema.Types.String, required: true}
})

const recovery_code_model = mongoose.model("recovery_code_model", recovery_code_with_emailSchema)

export {recovery_code_model}
