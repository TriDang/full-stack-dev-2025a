import { useReducer } from "react";

export default function Reducer() {
  const [state, dispatch] = useReducer(updateMe, { count: 0 });

  return (
    <div>
      <h1>Reducer</h1>
      <p>Count is: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "double" })}>
        Double
      </button>
      <button onClick={() => dispatch({ type: "halve" })}>
        Halve
      </button>
    </div>
  );
}

function updateMe(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "double":
      return { count: state.count * 2 };
    case "halve":
      return { count: state.count / 2 };
    default:
      return state;
  }
}
