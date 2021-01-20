import * as React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./HotelList.module.css";
import HotelDetails from "../HotelDetails/HotelDetails";
import SelectHotel from "../Select/SelectHotel";
import { fetchData } from "../../Api";

const resource = fetchData();

interface payload {
  id: string;
  name: string;
  hotelPerNight: string;
  image: string;
  subTitle: string;
}

const HotelList: React.FC = () => {
  let numOfNights: Array<number> = [];
  Array.from(Array(100), (_, i) => numOfNights.push(i + 1));
  const data = resource.hotels.read();
  return (
    <div className={cx(styles.pageContainer)}>
      <div className="page-title">
        <h5>Hotel List</h5>
      </div>
      {data.map(
        (item: {
          id: string;
          name: string;
          hotelPerNight: string;
          image: string;
          subTitle: string | undefined;
        }) => (
          <>
            <div className={cx(styles.container)} key={item.id}>
              <HotelDetails
                name={item.name}
                subTitle={item.subTitle}
                image={item.image}
              />
              <div className={cx(styles.totalContainer)}>
                <SelectHotel options={numOfNights} />
                <div className={styles.total}>{"00.00 €"}</div>
              </div>
            </div>
          </>
        )
      )}
      <div className={styles.overallTotalContainer}>
        <div>
          <div className={styles.total}>{"00.00 €"}</div>
          <Link to="/payment">
            <button className={styles.button}>Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
