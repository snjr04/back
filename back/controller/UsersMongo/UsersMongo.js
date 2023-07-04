import UsersModel from '../../models/Users.js'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


export const register = async(req,res) =>{
    try{


        const {password,...other} = req.body

        const sold = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,sold)

        const doc = new UsersModel({
            ...other,
            password:hash
        })

        const user = await doc.save()

        const token = jwt.sign({
            id:user.id,
        },'secret',{expiresIn: '30d'})


        const {passwordHash,... userData} = user.doc

        res.json(user)

    }catch (err) {
        res.status(500).json({
            message: 'ошибка'
        })
    }
}

export const login = async (req,res) =>{
    try{
        const user = await UsersModel.findOne({email:req.body.email})
        if (!user) {
            return res.status(404).json({
                message: 'not found'
            })
        }
        const loginPass = await bcrypt.compare(req.body.password, user.doc.password)

        if (!loginPass){
            return res.status(404).json({
                message: 'not found'
        })
        }
        const token = jwt.sign({
        id:user.id
        },'secret',{expiresIn: 10}
        )

    }catch(err){
        res.status(500).json({
            message:'ошибка'
        })
    }
}




