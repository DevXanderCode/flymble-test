import * as React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./HotelList.module.css";
import HotelDetails from "../HotelDetails/HotelDetails";
import SelectHotel from "../Select/SelectHotel";
import { fetchData } from "../../Api";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HotelConsumer } from "../../context";
import SearchInput from "../SearchBar/SearchInput";

const resource = fetchData();

interface payload {
  id: string;
  name: string;
  hotelPerNight: string;
  image: string;
  subTitle: string;
  total: number;
}

const HotelList: React.FC = () => {
  let numOfNights: Array<number> = [];
  Array.from(Array(100), (_, i) => numOfNights.push(i + 1));

  resource.hotels.read();

  return (
    <div className={cx(styles.pageContainer)}>
      <div className="page-title">
        <h3>Hotel List</h3>
      </div>
      <div className={cx(styles.container, styles.leftContent)}>
        <SearchInput />
      </div>
      <HotelConsumer>
        {(value): any =>
          value.hotels &&
          value.hotels.map((item: payload) => (
            <div className={cx(styles.container)} key={item.id}>
              <HotelDetails
                name={item.name}
                subTitle={item.subTitle}
                image={item.image}
              />
              <div className={cx(styles.totalContainer)}>
                <SelectHotel
                  options={numOfNights}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    value.increment(item.id, e.currentTarget.value)
                  }
                />
                <div className={cx(styles.container, styles.flexColumn)}>
                  <div className={cx(styles.mlauto)}>
                    <RiDeleteBin6Line
                      className={styles.icon}
                      onClick={() => value.deleteHotel(item.id)}
                    />
                  </div>
                  <div className={styles.total}>{`${item.total} €`}</div>
                </div>
              </div>
            </div>
          ))
        }
      </HotelConsumer>
      <HotelConsumer>
        {(value) => (
          <div className={styles.overallTotalContainer}>
            <div>
              <div className={styles.total}>{`${value.overAllTotal} €`}</div>
              <Link to="/payment">
                <button className={styles.button}>Buy</button>
              </Link>
            </div>
          </div>
        )}
      </HotelConsumer>
    </div>
  );
};

export default HotelList;
