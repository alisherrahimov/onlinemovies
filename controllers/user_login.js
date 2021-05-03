import { users_model } from "../database/models/users_model";
import bcrypt from "bcrypt";

const user_login = async (req, res) => {
  const { email, password } = req.body;
 
  try {
    if (email && password) {
      let user = await users_model.find({ email });
      console.log(user);
      if (user) {
        let pass = user[0].password;

        bcrypt.compare(password, pass, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result + "result");
            if (result) {
              res.status(200).json({ success: true, data: result });
            } else {
              res
                .status(200)
                .json({ success: true, data: "Email or Password wrong" });
            }
          }
        });
      } else {
        res.status(200).json({ success: true, data: "Email not register" });
      }
    } else {
      res
        .status(200)
        .json({ success: true, data: "Email or Password not inserted" });
    }
  } catch (e) {
    res.status(500).json({ success: false, data: e });
  }
};

export { user_login };
