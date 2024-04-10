import express from "express"
import books from './booksRoutes.js'

const routes = (app) => {
  app.route('/').get((req,res) => {
    res.status(200).send('Bem vindo a livraria')
  })

  app.use(express.json(), books)
}

export default routes