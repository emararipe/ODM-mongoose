import editoras from "../models/Editoras.js"

class EditoraController {
  static async encontrarEditoras(req, res) {
    try {
      const editorasAt = await editoras.find().exec()
      res.status(200).json(editorasAt)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async adicionarEditoras(req, res) {
    try {
      const editora = new editoras(req.body)
      const editorasAt = await editora.save()
      res.status(201).send(editorasAt.toJSON())
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async atualizarEditoras(req, res) {
    const id = req.params.id
    try {
      const dadosEditora = req.body
      const editorasAt = await editoras.findByIdAndUpdate(id, dadosEditora)
      res.status(201).send(editorasAt.toJSON())
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async encontrarUmEditora(req, res) {
    try {
      const index = req.params.id
      const editora = await editoras.findById(index)
      res.status(200).json(editora)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }

  static async deletaEditora(req, res) {
    try {
      const index = req.params.id
      const editora = await editoras.findById(index)

      const nomeEditora = editora.nome

      await editoras.findByIdAndDelete(index)
      res.status(200).send(`O Editora "${nomeEditora}" foi deletado.`)
    } catch (erro) {
      res.status(500).json({ error: `${erro}` })
    }
  }
}

export default EditoraController
