import {users_model} from "../database/models/users_model";
import nodemailer from "nodemailer";
import {recovery_code_model} from "../database/models/recovery_code_with_email";

const recovery_password = async (req, res) => {
    const {email} = req.body;
    try {
        const user = await users_model.find({email})
        if (user) {
            let transporter = await nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASS,
                },
            });
            const random_code = Math.round(Math.random() * 10000);

            const mail_options = {
                from: "alisher.raximov97@gmail.com",
                to: email,
                subject: "Alisher Raximov",
                text: "Recovery Password",
                html: `<h1>Code to reset password ${random_code}</h1>`,
            };
            await transporter.sendMail(mail_options, async (err, info) => {
                if (err) {
                    res.status(404).json({success: false, data: err});
                } else {
                    await (await recovery_code_model.create({email, code: random_code})).save()
                    res.status(200).json({success: true, data: "We sent the recovery code to your email address"})
                }
            });
        }
    } catch (e) {
        res.status(500).json({success: false, data: e})
    }

}

export {recovery_password}
