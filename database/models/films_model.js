import mongoose from "mongoose";

const type = mongoose.Schema.Types
const filmsSchema = mongoose.Schema({
    title: {type: type.String, required: true},
    duration: {
        movie_duration: {type: type.String},
        trailer_duration: {type: type.String}
    },
    description: {type: type.String, required: true},
    author: {type: type.String, required: true},
    image_url: {type: type.String, required: true},
    trailer_url: {type: type.String, required: true},
    movie_url: {type: type.String, required: true},
    rating: {type: type.String, default: 0}

}, {timestamp: true})

const films_model = mongoose.model("films_model", filmsSchema);

export {films_model}
