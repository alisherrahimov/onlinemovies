import {films_model} from "../database/models/films_model";

const get_films = (req, res) => {
    try {
        films_model.find((err, docs) => {
            if (err) {
                res.status(500).json({success: false})
            } else {
                res.status(200).json({success: true, data: docs})
            }
        })
    } catch (e) {
        res.status(404).json({success: false, data: e})
    }
}
const post_films = async (req, res) => {
    const {author, description, title, trailer_duration, movie_duration} = req.body
    const image_file = req.files.image
    const movie_file = req.files.video
    const trailer = req.files.trailer

    try {
        const create_film = await films_model.create({
            author,
            description,
            title,
            duration: {movie_duration, trailer_duration},
            image_url: image_file[0].path,
            trailer_url: trailer[0].path,
            movie_url: movie_file[0].path
        });
        await create_film.save((err, docs) => {
            if (err) {
                return res.status(500).json({success: false, data: err})
            } else {
                res.status(200).json({success: true, data: docs})
            }
        })
    } catch (e) {
        res.status(404).json({success: false, data: e})
    }

}
export {get_films, post_films}
