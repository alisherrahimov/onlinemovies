import express from "express"
import {upload} from "../../middleware/image_upload";
import {post_films} from "../../controllers/films_controller";

const admin_routes = express.Router()
//films upload
admin_routes.post("/films", upload, post_films);
export {admin_routes}
