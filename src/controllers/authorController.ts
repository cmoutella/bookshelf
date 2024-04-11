import { author } from "../models/Author";
import { Request, Response } from "express";

class AuthorController {
  static async listAll(req: Request, res: Response) {
    try {
      const manyBooks = await author.find({});
      res.status(200).json(manyBooks);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Falha na requisição", erro: (err as Error).message });
    }
  }

  static async listById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const anAuthor = await author.findById(id);
      res.status(200).json(anAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const newAuthor = await author.create(req.body);

      res.status(201).json({ message: "Success!", book: newAuthor });
    } catch (err) {
      res.status(500).json({
        message: "Não foi possível criar o autor",
        erro: (err as Error).message,
      });
    }
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: `Autor atualizado com sucesso` });
    } catch (err) {
      res.status(500).json({
        message: "Falha na atualização",
        erro: (err as Error).message,
      });
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await author.findByIdAndDelete(id);
      res.status(200).json(`Autor removido com sucesso`);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Falha na exclusão", erro: (err as Error).message });
    }
  }
}

export default AuthorController;
