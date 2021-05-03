import {films_model} from "../database/models/films_model";

const delete_films = (req, res) => {
    const id = req.params.id;
    films_model.findByIdAndDelete(id, (err, docs) => {
        if (err) {
            return res.status(200).json({err: err})
        } else {
            res.status(200).json({data: docs})
        }
    })
}
export {delete_films}
