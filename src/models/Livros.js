import mongoose, { Schema } from "mongoose"

const livrosSchema = new mongoose.Schema(
    {
        id: { type: String },// não é necessário definir id como required pois ele é gerado automaticamente
        titulo: { type: String, required:true },
        autor: { type: mongoose.Schema.Types.ObjectId, ref:'autores', required:true },
        editora: { type: mongoose.Schema.Types.ObjectId, ref:'editoras', required:true },
        numeroPaginas: { type: Number }
    }
)

const livros = mongoose.model('livros', livrosSchema)

export default livros