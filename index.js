import express from 'express'
import multer from 'multer'
import bodyParser from 'body-parser'
// import fetch from 'node-fetch'
import speech from 'google-speech-api'

const opts = {
  key: process.env.SPEECH_API_KEY
}

const app = express()
const upload = multer()

app
.use(express.static('./public'))
.use(bodyParser.json())
.post('/file', upload.single('audio'), (req, res) => {
  console.log('Received files: ' + req.file)
  res.send('OK')
})
.post('/', (req, res) => {
  request
  .get(req.body.audioFileUrl)
  .pipe(speech(opts, (err, res) => {
    console.log(err)
    console.log(res)
    res.send('OOK')
  }))
})
.listen(process.env.PORT || 5000)
