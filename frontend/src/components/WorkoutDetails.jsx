import { useWorkoutsContext } from "../hooks/useWorkoutcontext";
import formatDistanceToNow from "date-fns/formatDistance";
function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  async function handleClick() {
    const response = await fetch(
      "http://localhost:5500/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json;
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      <p> {workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default WorkoutDetails;
