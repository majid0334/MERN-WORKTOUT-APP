require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const workoutsRoutes = require("./routes/api/workouts-api");

//express app
const app = express();
//För säkerheten och kunna hämta data från två olika länkar
app.use(cors());
//För att anslutna till databas
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MDB connected..."))
  .catch((err) => console.log(err));

//middleweare alla data som skickas in konverteras till json
app.use(express.json());

//Funktionen som körs mellan routes middlewear.
//next för att kunna låta den gå till nästafunktoin som är routes annars den kommer inte funka
//Här ska vi display vilket slacks antop sket på vilket url/port
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes /api/workouts är sökvägen med hjälp av workuts routes läggs våra id
app.use("/api/workouts", workoutsRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(process.env.PORT || 5500, () => {
  console.log("http://localhost:5500/");
});
