import * as React from "react";
import cx from "classnames";
import styles from "./HotelList.module.css";
import HotelDetails from "../HotelDetails/HotelDetails";
import SelectHotel from "../Select/SelectHotel";

const HotelList: React.FC = () => {
  let numOfNights: Array<number> = [];
  Array.from(Array(100), (_, i) => numOfNights.push(i + 1));
  return (
    <div className={cx(styles.pageContainer)}>
      <div className="page-title">
        <h5>Hotel List</h5>
      </div>
      <div className={cx(styles.container)}>
        <HotelDetails />
        <div className={cx(styles.totalContainer)}>
          <SelectHotel options={numOfNights} />
          <div className={styles.total}>{"00.00€"}</div>
        </div>
      </div>
      <div className={styles.overallTotalContainer}>
        <div>
          <div className={styles.total}>{"00.00€"}</div>
          <button className={styles.button}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
