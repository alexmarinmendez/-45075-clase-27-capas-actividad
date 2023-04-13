import express from 'express'
import operacionesRouter from './routes/operaciones.js'
const app = express()

app.use('/operaciones', operacionesRouter)

app.listen(8080, () => console.log('Server Up'))