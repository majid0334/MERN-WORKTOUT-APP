import { createContext, useReducer } from "react";

//Skapar contenxt
export const WorkoutsContext = createContext();

//Skapar reducer funciton action vad är det som man vill göra
export function workoutsReducer(state, action) {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w.id !== action.payload),
      };
    default:
      return state;
  }
}
//dispatch för att upptadera funktionen och state varivel
export function WorkoutsContextProvider({ children }) {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
}
