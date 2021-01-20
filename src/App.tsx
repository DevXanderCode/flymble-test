import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
const HotelList = React.lazy(() => import("./components/HotelList/HotelList"));
// import HotelList from "./components/HotelList/HotelList";
// const SkeletonLoader = React.lazy(
//   () => import("./components/SkeletonLoader/SkeletonLoader")
// );

const App: React.FC = () => {
  return (
    <div className="App">
      <React.Suspense
        fallback={
          <div style={{ marginTop: "3.9rem" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <SkeletonLoader key={item} />
            ))}
          </div>
        }
      >
        <Switch>
          <Route exact path="/" render={() => <HotelList />} />
          <Route exact path="/skeleton" render={() => <SkeletonLoader />} />
          {/* <Route path="/payment" render={() => <PaymentForm />} /> */}
          {/* <Route render={() => <NotFoundPage} /> /> */}
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default App;
