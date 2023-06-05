const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/api/workouts-controller");

//Get alla workouts /api/workouts
router.get("/", controller.getAllWorkout);

//Get single worukts /api/workouts/:id
router.get("/:id", controller.getOneWorkout);

//Post single worukts /api/workouts/:id
router.post("/", controller.createWorkout);
//Delete single worukts /api/workouts/:id
router.delete("/:id", controller.deleteWorkout);

//Uptadet single worukts /api/workouts/:id
router.patch("/:id", controller.uptadeWorkout);

module.exports = router;
