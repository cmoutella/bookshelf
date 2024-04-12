import mongoose from "mongoose";
import { BookInterface, bookSchema } from "./Book";

interface CatalogBookInterface {
  book: BookInterface;
  quantity: number;
  rented: number;
}

const catalogBookSchema = new mongoose.Schema(
  {
    book: bookSchema,
    quantity: { type: Number, required: true },
    rented: { type: Number, required: true },
  },
  { versionKey: false }
);

const catalog = mongoose.model("catalog", catalogBookSchema);

export { catalog, catalogBookSchema, CatalogBookInterface };
