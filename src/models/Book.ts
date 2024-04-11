import mongoose from "mongoose";
import { AuthorInterface, authorScheema } from "./Author";

interface BookInterface {
  id: string;
  author: AuthorInterface;
  title: string;
  publisher?: string;
  pages?: number;
}

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    author: authorScheema,
    title: { type: String, required: true },
    publisher: { type: String },
    pages: { type: Number },
  },
  { versionKey: false }
);

// TODO change at Mongo to books
const book = mongoose.model("books", bookSchema);

export { book, bookSchema, BookInterface };
