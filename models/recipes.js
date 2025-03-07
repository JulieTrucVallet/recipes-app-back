import mongoose, { Schema } from "mongoose"

const recipeSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    ingredients : [{type : String}],
    category : {
        type : String
    },
    country : {
        type : String
    },
    description : {
        type : String
    },
    steps : [{type : String}],
    author : {
        type : Schema.Types.ObjectId, ref : 'User' // create the association with the other collection through the userId
    }
})

export default mongoose.model('Recipe', recipeSchema)