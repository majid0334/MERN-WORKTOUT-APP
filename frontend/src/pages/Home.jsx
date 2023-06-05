import { useEffect, useState } from "react";
import WorkoutDetails from "./../components/WorkoutDetails";
import WorkoutForm from "./../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutcontext";
function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  /*   const [workouts, setWorkouts] = useState(null); */
  //Tom array betyder funktion körs en gång bara när sidan renderas
  //nu ska vi hämta data från databasen till vår frontend
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        //Fetchar data från det här urlen från vår backend
        const response = await fetch("http://localhost:5500/api/workouts/");
        if (response.ok) {
          //converterar till json data array och lägger in datan i vår state
          //Datan kommer som json format från nvar backend sedan om svåret är okej sätter vi in
          //json data i vår state för att display datan
          const json = await response.json();
          /* setWorkouts(json); */
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      } catch (error) {
        //Error hantering
        console.error(error);
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="workouts">
        {/* Om svåret är true/ok så kör vi en for each loop fär datan annars kör inte lopen */}
        {workouts ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <p>No workouts to show</p>
        )}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
