import { useState } from "react";
function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  //skicka datan till databasen
  async function handleSubmit(e) {
    e.preventDefault();
    //våra usetste variabler som ska skickas in
    const workout = { title, load, reps };
    //skickar datan till vår api med den här Url
    const response = await fetch("http://localhost:5500/api/workouts/", {
      //method Post
      method: "POST",
      //skickar in vår data som json som är state variblar
      body: JSON.stringify(workout),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("New workout added", json);
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add workout</h3>
      <label>Exsersize title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>LOad (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Reps</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
