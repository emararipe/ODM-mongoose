import mongoose from 'mongoose'

const senha = encodeURIComponent("8UU.rUyfvui3iwh")

mongoose.connect(`mongodb+srv://emararipe:${senha}@desenvolve.vahye03.mongodb.net/alura-node`)

let db = mongoose.connection

export default db