import mongoose from "mongoose";

const type = mongoose.Schema.Types;

const usersSchema = mongoose.Schema({
    email: {type: type.String, required: true, unique: true},
    price_check: {type: type.Boolean, default: false},
    name: {type: type.String, default: "No Name"},
    last_name: {type: type.String, default: "No Last Name"},
    password: {type: type.String, required: true},
    active: {type: type.String, default: false}
}, {timestamp: true})

const users_model = mongoose.model("users_model", usersSchema)
export {users_model}
