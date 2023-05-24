import express from "express"
import EditoraController from "../controllers/editorasController.js"

const router = express.Router()

router.get('/editoras', EditoraController.encontrarEditoras)
router.post('/editoras', EditoraController.adicionarEditoras)
router.put('/editoras/:id', EditoraController.atualizarEditoras)
router.get('/editoras/:id', EditoraController.encontrarUmEditora)
router.delete('/editoras/:id', EditoraController.deletaEditora)

export default router