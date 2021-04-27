import {films_model} from "../database/models/films_model";

const top_films = async (req, res) => {
    try {
        const top_movies = await films_model.find({}).sort({rating: -1}).limit(5)
        res.status(200).json({success: true, data: top_movies})
    } catch (e) {
        res.status(500).json({success: false, err: e})
    }
}
export {top_films}
