import express from 'express'
import connectToDB from './config/dbConnect.js'
import routes from './routes/index.js'

const connection = await connectToDB()

connection.on('error', (err) => {
  console.error("erro de conexao", err)
})

connection.once('open', () => {
  console.log('DB conectado com sucesso')
})

const app = express()
routes(app)

export default app