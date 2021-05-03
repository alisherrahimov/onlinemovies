import { users_model } from "../database/models/users_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { code_and_email } from "../database/models/code_and_email";

const user_register = async (req, res) => {
  const { code, email, name, last_name, password } = req.body;

  try {
    const data = await code_and_email.find({ email: email });

    if (data[0].email === email && data[0].code === code) {
      let pass = bcrypt.hashSync(password, 10);
      const user_create = await users_model.create({
        email: email,
        name: name,
        last_name: last_name,
        password: pass,
      });
      await user_create.save();
      const token = await jwt.sign(
        { email, name, last_name },
        process.env.TOKEN_KEY,
        { expiresIn: 86400 }
      );
      res.status(200).json({ success: true, token: token });
    } else {
      res.status(400).json({ success: false, data: "Code invalid" });
    }
  } catch (e) {
    res.status(500).json({ success: false, data: e });
  }
};

export { user_register };
