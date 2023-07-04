import todosModel from '../../models/todos'


export const todosAll = async (req,res) =>{
    try{
        const todos = await todosModel.find()

        res.json(todos)
    }catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}

export const todosOne = async (req,res) =>{
    try{
        const todoId = req.params.id

        const todo = todosModel.findById({_id: todoId})

        res.json(doc)


    }catch (err) {
    res.status(500).json({
        message:err.message
    })
}
}

export const todoOneEdite = async (req,res) =>{
    try{
        const todoId = req.params.id

        await todosModel.findByIdAndUpdate({
            _id:todoId
        },{
            ...req.body
        },{
            returnDocument:'after'
            },async (err,doc) =>{
            if(err) {
                throw new Error('не удалось совершить покупку')
            }
            if (!doc){
                return res.status(404).json({
                    message:"Юзер не найден"
                })
            }
            res.json(doc)
            })

    }catch (err) {
        res.status(500).json({
            message:err.message
        })
    }

}


export const todosCreate = async (req,res) =>{
    try{
      const doc = new todosModel({
          text: req.body.text,
          age:req.body.age,
          isImportant:false,
          isDone:false
      })
      const todos = await doc.save()

        res.json(todos)


    }catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}