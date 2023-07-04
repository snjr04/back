import fs from "node:fs"
import {v4 as uuidv4} from 'uuid'


export const  createTodo =(req,res) =>{
    fs.readFile('data/todo.json','utf8',(err,data) =>{
        if (err){

        }
        let jsonData = JSON.parse(data)
        let newDate = [...jsonData,{
            text:req.body.text,
            isImportant:false,
            isDone:false,
            id:uuidv4(),
            time:new Date()
        }]
    })
}

export const getAllTodo = (req,res) =>{
    try{
        fs.readFile('data/todo.json','utf8',(err,data) =>{
            if(err){
                throw new Error('dddd')
            }
            let jsonData = JSON.parse(data)
            res.json(jsonData)
        })


    }catch (err) {
        res.status(500).json({
            massage: err.massege
        })
    }
}

export const getOneTodo = (req,res) =>{
    try{
        fs.readFile('data/todo.json','utf8',(err,data) =>{
            if(err) {
                throw new Error('ddd')
            }
            let jsonData = JSON.parse(data)
            let todo = jsonData.find(item => item.id === req.parse.id)
            res.json(todo)
        })

    }catch (err) {
        res.status(500).json({
            massage: err.massege
        })
    }
}

export const updateOnetodo = (res,req) =>{
    try{
        fs.readFile('data/todo.json','utf8',(err,data) =>{
            if (err) {
                throw new Error('ddd')
            }
            let jsonData = JSON.parse(data)
            let todo = jsonData.find(item => item.id === req.parse.id)
            res.json(todo)
        })

    }catch(err) {

    }
}


export const deleteOneUser = (req,res) =>{
    try{
        fs.readFile((err,data) =>{

        })
    }catch (err) {

    }
}