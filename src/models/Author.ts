import mongoose, { ObjectId } from "mongoose";

interface AuthorInterface {
  id: ObjectId;
  name: string;
  nationality?: string;
}

const authorScheema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nationality: { type: String },
  },
  { versionKey: false }
);

const author = mongoose.model("authors", authorScheema);

export { author, authorScheema, AuthorInterface };
