//skapar strukur för databasen
const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, 
//Visar när dokumnten skapades och ändras senast
{timestamps: true});

//Skapar collection namnet för databasen
module.exports = mongoose.model("Workout", workoutSchema)