import { Query } from "mongoose";
import { author, AuthorInterface } from "../models/Author";
import { book, BookInterface } from "../models/Book";
import { deserialize } from "mongodb";
import { stringify } from "nodemon/lib/utils/index.js";

class BookController {
  static async create(req, res) {
    const newBook = req.body;
    try {
      const authorData = await author.findById(newBook.author);

      if (authorData) {
        // const foundAuthor = stringify(authorData)
        // const sanitizedAuthor = JSON.parse(foundAuthor)

        const bookData: BookInterface = {
          ...newBook,
          author: authorData,
        };

        const createdBook = await book.create(bookData);

        res.status(201).json({ message: "Success!", book: createdBook });
      } else {
        res
          .status(204)
          .json({ message: "Não foi possível encontrar este autor." });
      }
    } catch (err) {
      res.status(500).json({
        message: "Não foi possível criar um livro",
        erro: err.message,
      });
    }
  }

  static async listAll(req, res) {
    try {
      const manyBooks = await book.find({});
      res.status(200).json(manyBooks);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Falha na requisição", erro: err.message });
    }
  }

  static async listById(req, res) {
    const id = req.params.id;
    try {
      const oneBook = await book.findById(id);
      res.status(200).json(oneBook);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async listByPublisher(req, res) {
    const publishr = req.query.editora;
    try {
      const booksByPublisher = await book.find({ publisher: publishr });
      res.status(200).json(booksByPublisher);
    } catch (err) {
      res.status(500).json({ message: "Houve um problema na requisição" });
    }
  }

  static async listByAuthor(req, res) {
    const searched = req.query.autor;
    const sanitizedSearched = String(searched).replace("_", " ");

    try {
      const booksByAuthor = await book.find({
        "author.name": sanitizedSearched,
      });
      if (booksByAuthor.length <= 0) {
        res.status(200).json({
          message: "Empty!",
          searchedBy: sanitizedSearched,
          books: booksByAuthor,
        });
      }
      res.status(200).json({
        message: "Success!",
        searchedBy: sanitizedSearched,
        books: booksByAuthor,
      });
    } catch (err) {
      res.status(500).json({ message: "Houve um problema na requisição" });
    }
  }

  static async update(req, res) {
    const id = req.params.id;
    try {
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: `Livro atualizado com sucesso` });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Falha na atualização", erro: err.message });
    }
  }

  static async delete(req, res) {
    const id = req.params.id;
    try {
      await book.findByIdAndDelete(id);
      res.status(200).json(`Livro removido com sucesso`);
    } catch (err) {
      res.status(500).json({ message: "Falha na exclusão", erro: err.message });
    }
  }
}

export default BookController;
