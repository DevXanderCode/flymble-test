import * as React from "react";

const HotelContext = React.createContext<any>(undefined);

const HotelProvider: React.FC = (props) => {
  const [hotelState, setHotelState] = React.useState({ test: "" });
  return (
    <HotelContext.Provider value={{ ...hotelState }}>
      {props.children}
    </HotelContext.Provider>
  );
};

const HotelConsumer = HotelContext.Consumer;

export { HotelProvider, HotelConsumer };
