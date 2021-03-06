import * as React from "react";
import axios from "axios";
// import { fetchData } from "./Api";

const HotelContext = React.createContext<any>(undefined);

// const resource = fetchData();
const baseUrl = "https://600568e875860e0017c5c7f8.mockapi.io/api/v1/hotels";

interface payload {
  id: string;
  name: string;
  hotelPerNight: string;
  image: string;
  subTitle: string;
  total: number;
}

const HotelProvider: React.FC = (props) => {
  const [hotelState, setHotelState] = React.useState({
    total: "00.00",
    overAllTotal: "00.00",
  });

  const [hotelDetails, setHotelDetails] = React.useState<Array<payload>>([]);
  const [fixedHotels, setFixedHotels] = React.useState<Array<payload>>([]);
  let [counter, setCounter] = React.useState(0);

  const increment = (id: string, num: number) => {
    let tempHotels: Array<payload> = [...hotelDetails];
    setCounter(counter++);

    const selectedIdx: number = tempHotels.findIndex(
      (selectedItem) => selectedItem.id === id
    );
    let hotel: payload = tempHotels[selectedIdx];

    hotel.total = num * Number(hotel.hotelPerNight);

    tempHotels[selectedIdx] = hotel;

    setHotelDetails([...tempHotels]);
  };

  const filterHotels = (id: string) => {
    setHotelDetails(hotelDetails.filter((hotel) => hotel.id !== id));
  };

  const deleteHotel = (id: string) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => filterHotels(id))
      .catch((err) =>
        console.log("I Got this error when i tried to delete a record", err)
      );
  };

  const search = (searchInput: string) => {
    console.log("Logging search value", searchInput);
    if (searchInput) {
      setHotelDetails(
        hotelDetails.filter((hotel) =>
          hotel.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setHotelDetails([...fixedHotels]);
    }
  };

  React.useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setHotelDetails(res.data);
        setFixedHotels(res.data);
      })
      .catch((err) => console.log("Got this error when fetching Hotels", err));
  }, []);

  React.useEffect(() => {
    let total: Array<number> = [];
    hotelDetails.forEach((item) => total.push(item.total));

    let overAllTotal =
      total.length > 0 && total.reduce((total, num) => total + num);

    overAllTotal
      ? setHotelState({
          ...hotelState,
          overAllTotal: `${overAllTotal.toFixed(2)}`,
        })
      : setHotelState({ ...hotelState, overAllTotal: "00.00" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, hotelDetails]);
  return (
    <HotelContext.Provider
      value={{
        hotels: [...hotelDetails],
        ...hotelState,
        increment,
        deleteHotel,
        search,
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

const HotelConsumer = HotelContext.Consumer;

export { HotelProvider, HotelConsumer };
