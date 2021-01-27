import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HotelProvider } from "./context";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
const HotelList = React.lazy(() => import("./components/HotelList/HotelList"));
const PaymentForm = React.lazy(
  () => import("./components/PaymentForm/PaymentForm")
);

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
        <HotelProvider>
          <Switch>
            <Route exact path="/" render={() => <HotelList />} />
            <Route path="/payment" render={() => <PaymentForm />} />
            {/* <Route render={() => <NotFoundPage} /> /> */}
          </Switch>
        </HotelProvider>
      </React.Suspense>
    </div>
  );
};

export default App;
