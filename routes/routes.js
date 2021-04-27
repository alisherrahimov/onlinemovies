// noinspection JSCheckFunctionSignatures

import express from "express";
import {get_films, post_films} from "../controllers/films_controller";
import {user_register} from "../controllers/users_register";
import {upload} from "../middleware/image_upload";
import {user_login} from "../controllers/user_login";
import {validation} from "../middleware/validation";
import {email_code_send} from "../middleware/email_code_send";
import {email_code_verify} from "../controllers/email_code_verify";
import {recovery_password} from "../middleware/recovery_password";
import {recovery_code_verify} from "../middleware/recovery_code_verify";
import {recovery_password_update} from "../controllers/recovery_password_update";
import {top_films} from "../controllers/top_films";
import jwt from "jsonwebtoken"
import {films_search} from "../controllers/films_search";

const router = express.Router();
//All films show
router.get("/films", get_films);
//films post
router.post("/films", upload, post_films);
//user register
router.post("/user/email/register", validation, user_register);
//user check login
router.post("/user/login", user_login);
//send code verify
router.post("/user/emailcodesend/register", validation, email_code_send, email_code_verify);
//recovery password send email code
router.post("/user/password/recovery", recovery_password)
//recovery code verify
router.post("/user/email/recovery/code", recovery_code_verify, recovery_password_update)
//top films
router.get("/topfilms", top_films)
//films search
router.post("/films/search", films_search)




export {router};
