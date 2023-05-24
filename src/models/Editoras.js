import mongoose, { Schema } from "mongoose"

const editorasSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required:true }
    }
)

const editoras = mongoose.model('editoras', editorasSchema)

export default editoras