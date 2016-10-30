import express from 'express'
import multer from 'multer'

const app = express()
const upload = multer()

app
.post('/', upload.single('audio'), (req, res) => {
  console.log('Received files: ' + req.file)
  res.send('OK')
})

.listen(process.env.PORT || 5000)
