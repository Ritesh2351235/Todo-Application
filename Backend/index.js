const express = require("express");
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg:"Incorrect inputs",
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description : createPayload.description,
        completed:false,
    })
    res.json({
        msg: "Todo Created"
    })

})

app.get("/todo", async function(req,res){

    const todos = await todo.find({})
    console.log(todos);
    res.json({
        todos
    })
    
})

app.put("/todo", async function(req,res){
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg:"Incorrect input",
        })
    return;
    }
    await todo.update({
        _id:req.body.id

    },
    {
        completed:true
    })
    res.json({
        msg: "Todo marked as complete"
    })
    
})

const port = process.env.PORT || 3000;
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})