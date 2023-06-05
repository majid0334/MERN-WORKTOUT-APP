//Här ligger allt logik
const Workout = require("./../../models/workouts-model");

module.exports = {
  //Get all ingdeient
  getAllWorkout: async (req, res) => {
    try {
      //Vi hittar alla ingredienser och sedan displayar dom i turoedning nyasteste först
      const workout = await Workout.find().sort({ createdAt: -1 });
      res.send(workout);
    } catch (error) {
      res.status(500).send(error.massage);
    }
  },
  createWorkout: async (req, res) => {
    //skickas som json data
    const { title, load, reps } = req.body;
    try {
      //För att skicka data till databasen
      const workout = await Workout.create({ title, load, reps });
      res.status(200).send(workout);
    } catch (error) {
      res.status(400).send(error.massage);
    }
  },
  getOneWorkout: async (req, res) => {
    try {
      //Vi hittar specifik ingrediens och sedan displayar den
      const workout = await Workout.findById(req.params.id);
      res.send(workout);
    } catch (error) {
      res.status(500).send(error.massage);
    }
  },

  deleteWorkout: async (req, res) => {
    try {
      const workout = await Workout.findByIdAndDelete({ _id: req.params.id });
      res.send(workout);
    } catch (error) {
      res.status(400).send(err.massage);
    }
  },

  uptadeWorkout: async (req, res) => {
    try {
      const workout = await Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
    } catch (error) {
      res.status(400).send(error.massage);
    }
  },
};
