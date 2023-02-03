import { Action } from "@remix-run/router";
import React, {useReducer} from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1 };
            case "decrement":
                return {count: state.count - 1};
                default:
                    return state;
    }
};

const TestComponent = () => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    return (
        <div>
            <h1>The count is {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment"})}>Increase</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
        </div>
    )
};

export default TestComponent;