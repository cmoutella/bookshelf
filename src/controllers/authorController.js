import {author} from "../models/Author.js";

class AuthorController {
  static async listAll (req, res) {
    try {    
      const manyBooks = await author.find({})
      res.status(200).json(manyBooks)
    } catch (err) {
      res.status(500).json({message: 'Falha na requisição', erro: err.message})
    }
  }

  static async listById (req, res) {
    const id = req.params.id
    try {
      const anAuthor = await author.findById(id)
      res.status(200).json(anAuthor)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async create (req, res) {
    try {
      const newAuthor = await author.create(req.body)

      res.status(201).json({message: 'Success!', book: newAuthor})
    }
    catch (err) {
      res.status(500).json({message: 'Não foi possível criar o autor', erro: err.message})
    }
  }

  static async update (req, res) {
    const id = req.params.id
    try {
      await author.findByIdAndUpdate(id, req.body)
      res.status(200).json({message: `Autor atualizado com sucesso`})
    } catch (err) {
      res.status(500).json({message: 'Falha na atualização', erro: err.message})
    }
  }

  static async delete (req, res) {
    const id = req.params.id
    try {
      await author.findByIdAndDelete(id)
      res.status(200).json(`Autor removido com sucesso`)
    } catch (err) {
      res.status(500).json({message: 'Falha na exclusão', erro: err.message})
    }
  }
}

export default AuthorController