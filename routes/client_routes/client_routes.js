import express from "express"

import {get_films} from "../../controllers/films_controller";
import {validation} from "../../middleware/validation";
import {user_register} from "../../controllers/users_register";
import {user_login} from "../../controllers/user_login";
import {email_code_send} from "../../middleware/email_code_send";
import {email_code_verify} from "../../controllers/email_code_verify";
import {recovery_password} from "../../middleware/recovery_password";
import {recovery_code_verify} from "../../middleware/recovery_code_verify";
import {recovery_password_update} from "../../controllers/recovery_password_update";
import {header_token_check} from "../../middleware/header_token_check";
import {top_films} from "../../controllers/top_films";
import {films_search} from "../../controllers/films_search";

const client_routes = express.Router()
//get all films
client_routes.get("/films", get_films);
//user register
client_routes.post("/user/email/register", validation, user_register);
//user check login
client_routes.post("/user/login", validation, user_login);
//send code verify
client_routes.post(
    "/user/emailcodesend/register",
    validation,
    email_code_send,
    email_code_verify
);
client_routes.post("/user/password/recovery", validation, recovery_password);
//recovery code verify
client_routes.post(
    "/user/email/recovery/code",
    recovery_code_verify,
    recovery_password_update
);
client_routes.get("/topfilms", header_token_check, top_films);
//films search
client_routes.post("/films/search", header_token_check, films_search);

export {client_routes}
