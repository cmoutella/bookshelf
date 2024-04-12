import { Request, Response } from "express";
import { book } from "../models/Book";
import { catalog, CatalogBookInterface } from "../models/Catalog";
import { Document } from "mongodb";

class CatalogController {
  static async print(req: Request, res: Response) {
    try {
      const catalogReport = await catalog.find({});
      res.status(200).json(catalogReport);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Falha na requisição", erro: (err as Error).message });
    }
  }

  static async listById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const catalogItem = await catalog.findById(id);
      res.status(200).json(catalogItem);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addToCatalog(req: Request, res: Response) {
    const data = req.body;

    try {
      const bookData: Document | null = await book.findById(data.book);

      if (bookData) {
        const newCatalogEntry: CatalogBookInterface = {
          quantity: 1,
          rented: 0,
          book: { ...bookData._doc },
        };

        const createdBook = await catalog.create(newCatalogEntry);

        res.status(201).json({ message: "Success!", book: createdBook });
      } else {
        throw new Error("Não foi possível encontrar esse livro");
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "Falha na requisição", erro: (err as Error).message });
    }
  }

  static async addCopy(req: Request, res: Response) {
    const data = req.body;

    try {
      const catalogBook: Document | null = await catalog.findById(data.book);

      if (catalogBook) {
        const catalogBookCurrData: CatalogBookInterface = {
          ...catalogBook._doc,
        };

        const newTotalCopies =
          Number(catalogBookCurrData.quantity) + Number(data.add);

        const updated = {
          ...catalogBookCurrData,
          quantity: newTotalCopies,
        };

        const updatedd = await catalog.findByIdAndUpdate(data.book, updated);

        if (!updatedd) {
          throw new Error(
            "Aconteceu algum erro durante a atualização dos dados"
          );
        }

        res.status(200).json({
          message: `Atualizado: o livro ${catalogBookCurrData.book.title} tem agora ${newTotalCopies} cópias no acervo.`,
          updated: updatedd,
        });
      } else {
        throw new Error("Esse livro não está no catálogo");
      }
    } catch (err) {
      res.status(500).json({
        message: "Não foi possível atualizar a quantidade",
        error: err,
      });
    }
  }

  static async rentCopy(req: Request, res: Response) {
    // TODO
    res.status(500).json({ message: "NOT IMPLEMENTED" });
  }

  static async returnCopy(req: Request, res: Response) {
    // TODO
    res.status(500).json({ message: "NOT IMPLEMENTED" });
  }
}

export default CatalogController;
