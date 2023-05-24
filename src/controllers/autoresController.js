import autores from "../models/Autores.js"

class AutorController {
  static async encontrarAutores(req, res) {
    try {
      const autoresAt = await autores.find().exec()
      res.status(200).json(autoresAt)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async adicionarAutores(req, res) {
    try {
      const autor = new autores(req.body)
      const autoresAt = await autor.save()
      res.status(201).send(autoresAt.toJSON())
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async atualizarAutores(req, res) {
    const id = req.params.id
    try {
      const dadosAutor = req.body
      const autoresAt = await autores.findByIdAndUpdate(id, dadosAutor)
      res.status(201).send(autoresAt.toJSON())
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async encontrarUmAutor(req, res) {
    try {
      const index = req.params.id
      const autor = await autores.findById(index)
      res.status(200).json(autor)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async deletaAutor(req, res) {
    try {
      const index = req.params.id
      const autor = await autores.findById(index)

      const nomeAutor = autor.nome

      await autores.findByIdAndDelete(index)
      res.status(200).send(`O autor "${nomeAutor}" foi deletado.`)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }
}

export default AutorController
