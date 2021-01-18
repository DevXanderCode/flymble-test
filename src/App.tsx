import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HotelList from "./components/HotelList/HotelList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HotelList} />
        {/* <Route path="/payment" component={PaymentForm} /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
