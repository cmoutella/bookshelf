import mongoose from "mongoose";

const authorScheema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, required: true},
  nationality: {type: String}
}, {versionKey: false})

const author = mongoose.model("authors", authorScheema)

export default author