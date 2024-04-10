import mongoose from 'mongoose'


async function connectToDB() {
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@alurabooks.waigkzc.mongodb.net/livraria?retryWrites=true&w=majority&appName=AluraBooks`)

  return mongoose.connection
}

export default connectToDB
