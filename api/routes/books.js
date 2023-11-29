import express from "express";
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/book.js";

const router = express.Router()

router.get("/books", getBooks);

router.post("/books", addBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

export default router;