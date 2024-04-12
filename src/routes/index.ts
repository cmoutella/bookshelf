import type { Request, Response } from "express";
import express, { Router } from "express";
import books from "./booksRoutes";
import authors from "./authorsRoutes";
import catalog from "./catalogRoutes";

const router: Router = Router();

//Routes
router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Bem vinde");
});

router.use(express.json(), books);
router.use(express.json(), authors);
router.use(express.json(), catalog);

export { router };
