import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname == "image") {
            cb(null, "src/image")
        } else {
            if (file.fieldname == "video") {
                cb(null, "src/video")
            } else {
                cb(null, "src/trailers")
            }
        }
    },
    filename: (req, file, cb) => {
        const i = Math.round(Math.random() * 1000000000000000)
        if (file.fieldname == "image") {
            cb(null, i + ".jpg")
        } else {
            if (file.fieldname == "video") {
                cb(null, i + ".mp4")
            } else {
                cb(null, i + ".mp4")
            }
        }
    }
})

const upload = multer({storage: storage}).fields([{name: "image", maxCount: 1}, {
    name: "video",
    maxCount: 1
}, {name: "trailer", maxCount: 1}])
export {upload}
