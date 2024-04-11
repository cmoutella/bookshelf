import type { Request, Response } from "express";
import express, { Router } from "express";
import books from "./booksRoutes";
import authors from "./authorsRoutes";

const router: Router = Router();

//Routes
router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Bem vinde");
});

router.use(express.json(), books);
router.use(express.json(), authors);

export { router };
