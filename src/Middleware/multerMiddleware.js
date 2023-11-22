import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + "pictures_" + file.originalname 
      cb(null,uniqueSuffix)
    }
  })
  const fileFilter  = (req,file,cb) =>{
if(
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' 
){
cb(null, true)
}else {
    cb(null, false)
}
  }
  const upload = multer({ storage: storage, fileFilter: fileFilter})
  export default upload;