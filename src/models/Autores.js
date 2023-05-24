import mongoose, { Schema } from "mongoose"

const autoresSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required:true },
        nacionalidade: { type: String, required:true },
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model('autores', autoresSchema)

export default autores