const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://admin:admin@cluster0.4qg9b2z.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}
