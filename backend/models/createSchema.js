const mdb=require('mongoose')

const createSchema = mdb.Schema({
    groupName:String,
    description:String,
    members:[{
        name:String,
        amount:Number
    }]
})

const create_Schema=mdb.model("Group",createSchema)
module.exports= create_Schema