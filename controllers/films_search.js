// noinspection JSCheckFunctionSignatures

import {films_model} from "../database/models/films_model";

const films_search = async (req, res) => {
    const {film_name} = req.body
    try {
        const films = await films_model.find({title: `/${film_name}/`})
        res.status(200).json({success: true, data: films})
    } catch (e) {
        res.status(500).json({success: false, err: e})
    }
}
export {films_search}
