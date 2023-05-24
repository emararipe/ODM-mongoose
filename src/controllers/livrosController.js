import { query } from "express"
import livros from "../models/Livros.js"

class LivroController {
  static async encontrarLivros(req, res) {
    try {
      const livrosAt = await livros
        .find()
        .populate("autor", "nome")
        .populate("editora", "nome")
        .exec()
      res.status(200).json(livrosAt)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async adicionarLivros(req, res) {
    try {
      const livro = new livros(req.body)
      const livrosAt = await livro.save()
      res.status(201).send(livrosAt.toJSON())
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async atualizarLivros(req, res) {
    const id = req.params.id
    try {
      const dadosLivro = req.body
      const livrosAt = await livros.findByIdAndUpdate(id, dadosLivro)
      res.status(201).send(livrosAt.toJSON())
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async encontrarUmLivro(req, res) {
    try {
      const index = req.params.id
      const livro = await livros
        .findById(index)
        .populate("autor", "nome")
        .populate("editora", "nome")
      res.status(200).json(livro)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async deletaLivro(req, res) {
    try {
      const index = req.params.id
      const livro = await livros.findById(index)

      const nomeLivro = livro.titulo

      await livros.findByIdAndDelete(index)
      res.status(200).send(`O livro "${nomeLivro}" foi deletado.`)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async listarLivrosPorEditora(req, res) {
    try {
      const editoraId = req.params.editoraId
      const livrosEncontrados = await livros
        .find({ editora: editoraId })
        .populate("autor", "nome")
        .populate("editora", "nome")
      res.status(200).json(livrosEncontrados)
    } catch (erro) {
      res.status(500).send(`Nenhuma editora encontrada"`)
    }
  }
}

export default LivroController
