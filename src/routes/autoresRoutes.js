import express from "express"
import AutorController from "../controllers/autoresController.js"

const router = express.Router()

router.get('/autores', AutorController.encontrarAutores)
router.post('/autores', AutorController.adicionarAutores)
router.put('/autores/:id', AutorController.atualizarAutores)
router.get('/autores/:id', AutorController.encontrarUmAutor)
router.delete('/autores/:id', AutorController.deletaAutor)

export default router
