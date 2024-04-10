import express from 'express'
import AuthorController from '../controllers/authorController.js'


const routes = express.Router()

// LIST
routes.get("/authors", AuthorController.listAll)

routes.get("/authors/:id", AuthorController.listById)

// CREATE
routes.post("/authors", AuthorController.create)

// UPDATE
routes.put("/authors/:id", AuthorController.update)

// DELETE
routes.delete("/authors/:id", AuthorController.delete)

export default routes