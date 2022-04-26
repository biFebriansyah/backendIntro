const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'public/image',
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

const filter = (req, file, cb) => {
    if (
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpeg'
    ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const uploads = multer({
    storage: storage,
    fileFilter: filter
})

module.exports = uploads
