import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId}, 
  author: {type: String, required: true}, 
  title: {type: String, required: true}, 
  editor: {type: String },
  pages: {type: Number}
}, {versionKey: false})

const book = mongoose.model("livros", bookSchema)

export default book