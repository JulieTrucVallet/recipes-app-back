import Recipe from '../models/recipe.js'

export const getAllRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find().populate('author')
        if(recipes.length < 1){
            return res.status(400).json('Recipes not found')
        }
        return res.status(200).json(recipes)
    }
    catch(err){
        console. log(err)
        return res.status(400).json({message : 'Internal server error'})
    }
}

export const createNewRecipe = async (req, res) => {
    try {
        const { title, category, country, description, ingredients, steps, author } = req.body
        if (!title || !category || !country || !description || !ingredients || !steps || !author) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const newRecipe = await Recipe.create(req.body)
        return res.status(201).json(newRecipe)
    } catch (err) {
        console.error(err)
        return res.status(400).json({ message: "Invalid data" })
    }
}

export const getRecipeByID = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id).populate("author")
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" })
        }
        return res.status(200).json(recipe);
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("author")
        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" })
        }
        return res.status(200).json(updatedRecipe)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id)
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found" })
        }
        return res.status(200).json({ message: "Recipe deleted successfully" })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Internal server error" })
    }
}