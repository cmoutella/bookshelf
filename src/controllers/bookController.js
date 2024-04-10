import book from "../models/Book.js";

class BookController {
  static async listAll (req, res) {
    try {    
      const manyBooks = await book.find({})
      res.status(200).json(manyBooks)
    } catch (err) {
      res.status(500).json({message: 'Falha na requisição', erro: err.message})
    }
  }

  static async listById (req, res) {
    const id = req.params.id
    try {
      const oneBook = await book.findById(id)
      res.status(200).json(oneBook)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async create (req, res) {
    try {
      const newBook = await book.create(req.body)

      res.status(201).json({message: 'Success!', book: newBook})
    }
    catch (err) {
      res.status(500).json({message: 'Não foi possível criar um livro', erro: err.message})
    }
  }

  static async update (req, res) {
    const id = req.params.id
    try {
      await book.findByIdAndUpdate(id, req.body)
      res.status(200).json({message: `Livro atualizado com sucesso`})
    } catch (err) {
      res.status(500).json({message: 'Falha na atualização', erro: err.message})
    }
  }

  static async delete (req, res) {
    const id = req.params.id
    try {
      await book.findByIdAndDelete(id)
      res.status(200).json(`Livro removido com sucesso`)
    } catch (err) {
      res.status(500).json({message: 'Falha na exclusão', erro: err.message})
    }
  }
}

export default BookController