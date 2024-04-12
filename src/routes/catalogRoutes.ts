import express from "express";
import CatalogController from "../controllers/catalogController";

const routes = express.Router();

routes.get("/catalog", CatalogController.print);

routes.get("/catalog/:id", CatalogController.listById);

// ADD BOOK TO CATALOG
routes.post("/catalog/new", CatalogController.addToCatalog);

// UPDATE BOOK QUANTITY
routes.put("/catalog/add", CatalogController.addCopy);

// UPDATE RENT QUANTITY +1
routes.put("/catalog/rent", CatalogController.rentCopy);

// UPDATE RENT QUANTITY -1
routes.put("/catalog/return", CatalogController.returnCopy);

export default routes;
