import express from 'express'
import router from './router/routes.js'

const app = express()
const PORT = 3005

app.use('/', router)
app.use(express.static('assets'))

app.listen (PORT, () => { console.log(`http://localhost:${PORT}`) })