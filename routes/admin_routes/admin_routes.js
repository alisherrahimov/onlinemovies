import express from "express"
import {upload} from "../../middleware/image_upload";
import {header_token_check} from "../../middleware/header_token_check";
import {top_films} from "../../controllers/top_films";
import {all_films, delete_films, update_films, post_films} from "../../controllers/CRUD";

const admin_routes = express.Router()
//films upload
admin_routes.post("/films", upload, post_films);
//top films
admin_routes.get("/topfilms", header_token_check, top_films);
//get all films
admin_routes.get("/films", all_films);
// delete films
admin_routes.delete("/films/delete/:id", delete_films);
//update films
admin_routes.put("/films/update/:id", upload, update_films)


export {admin_routes}
