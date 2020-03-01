import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const middleware = store => {
//     return (next) => {
//         return (action) =>{
//             console.log("[Middleware]", store.getState());
//             const result = next(action)
//             console.log("[Middleware] between the results", store.getState())
//             return result
//         }
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware, thunk)));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
