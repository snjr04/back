import express from 'express'
import {createOneUser, getAllUsers, getOneUser, updateOneUser} from "./controller/users/users.js";
import mongoose from "mongoose";
import {todosCreate} from "./controller/todosMongoDb/todosMongo.js";
import {login} from ''

const api = express()

api.use(express.json());

const mongoDbPassword = 'as06042515'

mongoose.connect(`mongodb+srv://super:${mongoDbPassword}@it-run.a6tv9er.mongodb.net/?retryWrites=true&w=majority`)
    .then(() =>console.log('Mongodb успешно запущен'))
    .catch((err) =>console.log('ошибка в MongoDb',err))



const PORT = 8080


api.get('/users', getAllUsers)
api.get('/users/:id', getOneUser)
api.post('/users', createOneUser)
api.patch('/users/:id', updateOneUser)


api.post('/test',todosCreate)

api.post('auth/users',register)
api.post('login/users',login)


api.listen(PORT, () => {
    console.log(`Сервер запущен на порту http://localhost:${PORT}`)
})