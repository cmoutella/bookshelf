import express from "express";
import connectToDB from "./config/dbConnect";
import routes from "./routes/index";

const connection = await connectToDB();

connection.on("error", (err) => {
  console.error("erro de conexao", err);
});

connection.once("open", () => {
  console.log("DB conectado com sucesso");
});

const app = express();
routes(app);

export default app;
