// import {} from "react-dom/experimental";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HotelProvider } from "./context";

const root = document.getElementById("root") as HTMLElement;
// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <HotelProvider>
//       <Router>
//         <App />
//       </Router>
//     </HotelProvider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <HotelProvider>
      <Router>
        <App />
      </Router>
    </HotelProvider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
