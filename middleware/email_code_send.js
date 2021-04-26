import nodemailer from "nodemailer";
import fs from "fs";
import {code_and_email} from "../database/models/code_and_email";
import {users_model} from "../database/models/users_model";

const email_code_send = async (req, res, next) => {
    const {email} = req.body;
    const is_email = await users_model.find({email: email});
    if (!is_email) {
        return res.status(400).json({err: "You already registered.!"});
    }
    try {
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
            subject: "birovlar ishqilib",
            text: "asdasasdasdas",
            html: `<h1>${random_code}</h1>`,
        };
        await transporter.sendMail(mail_options, async (err, info) => {
            if (err) {
                res.status(404).json({success: false, data: err});
            } else {
                const write_data = (await code_and_email.create({code: random_code, email: email})).save()
                req.info = info;
                next();
            }
        });
    } catch (e) {
        return res.status(500).json({success: false, data: e});
    }
};
export {email_code_send};
