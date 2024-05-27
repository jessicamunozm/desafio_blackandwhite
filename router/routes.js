import express from 'express'
import path from 'path'
import Jimp from 'jimp'
import {v4 as uuidv4} from 'uuid'
const __dirname = import.meta.dirname
const router = express.Router()

router.get('/', (req,res) => {
    res.sendFile(path.join (__dirname, '../views/index.html'))
})

router.get('/edited', async(req,res) => {
    const nameimg = `img${uuidv4().slice(0,6)}.jpg`
    const {img} = req.query
    const imgJimp = await Jimp.read(img)
    await imgJimp
    .resize (350, Jimp.AUTO)
    .grayscale()
    .writeAsync(`assets/img/${nameimg}`)
    res.sendFile(path.join (__dirname, `../assets/img/${nameimg}`))
})

export default router
