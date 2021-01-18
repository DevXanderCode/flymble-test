import * as React from "react";
import "./App.css";
import HotelList from "./components/HotelList/HotelList";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="page-title">
        <h5>Hotel List</h5>
      </div>
      <HotelList />
    </div>
  );
};

export default App;
