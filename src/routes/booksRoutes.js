import express from 'express'
import BookController from '../controllers/bookController.js'

const routes = express.Router()

// LIST
routes.get("/livros", BookController.listAll)

routes.get("/livros/:id", BookController.listById)

// CREATE
routes.post("/livros", BookController.create)

// UPDATE
routes.put("/livros/:id", BookController.update)

// DELETE
routes.delete("/livros/:id", BookController.delete)

export default routes