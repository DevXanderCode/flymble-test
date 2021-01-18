import * as React from "react";
import HotelDetails from "../HotelDetails/HotelDetails";

const HotelList: React.FC = () => {
  return (
    <div>
      <div className="page-title">
        <h5>Hotel List</h5>
      </div>
      <HotelDetails />
    </div>
  );
};

export default HotelList;
