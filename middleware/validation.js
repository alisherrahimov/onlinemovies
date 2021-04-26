// noinspection JSCheckFunctionSignatures

import Joi from "joi"

const validation = async (req, res, next) => {
    const {email, password, name, last_name} = req.body
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.email": "is not Email",
            "string.empty": "Required is Email"
        }),
        password: Joi.string().min(6).max(20).messages({"string.min": "Password minimum length 6"},
            {"string.max": "Password maximum length 20"}),
        name: Joi.string().required().messages({"string.empty": "Required is Name"}),
        last_name: Joi.string().required().messages({"string.empty": "Required is LastName"})
    })
    try {
        req.validation_user = await schema.validateAsync({email, password, name, last_name})
        next()
    } catch (e) {
        res.status(400).json({success: false, data: e})
    }
}

export {validation}
