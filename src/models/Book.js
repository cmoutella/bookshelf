import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId}, 
  author: {type: String, required: true}, 
  title: {type: String, required: true}, 
  editor: {type: String },
  pages: {type: Number}
}, {versionKey: false})

// TODO change at Mongo to books
const book = mongoose.model("books", bookSchema)

export default book