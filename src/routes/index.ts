import express from "express";
import books from "./booksRoutes";
import authors from "./authorsRoutes";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Bem vindo a livraria");
  });

  app.use(express.json(), books);
  app.use(express.json(), authors);
};

export default routes;
