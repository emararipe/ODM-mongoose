import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()// roteamento do express

router.get('/livros', LivroController.encontrarLivros)
router.post('/livros', LivroController.adicionarLivros)
router.put('/livros/:id', LivroController.atualizarLivros)
router.get('/livros/:id', LivroController.encontrarUmLivro)
router.delete('/livros/:id', LivroController.deletaLivro)
router.get('/livros/busca/:editoraId', LivroController.listarLivrosPorEditora)
export default router
