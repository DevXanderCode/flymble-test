import * as React from "react";

const HotelContext = React.createContext();

const HotelProvider = (props) => {
  const [hotelState, setHotelState] = React.useState("");
  return (
    <HotelContext.Provider value={{ ...hotelState }}>
      {props.children}
    </HotelContext.Provider>
  );
};

const HotelConsumer = HotelContext.Consumer;

export { HotelProvider, HotelConsumer };
