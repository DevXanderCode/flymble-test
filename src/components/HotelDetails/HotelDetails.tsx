import * as React from "react";
import cx from "classnames";
import styles from "./HotelDetails.module.css";

const HotelDetails: React.FC = () => {
  return (
    <div>
      <div className={cx(styles.container, styles.m10)}>
        <img src={"https://via.placeholder.com/100"} alt="hotel-image" />
        <div
          className={cx(
            styles.flex,
            styles.nowrap,
            styles.flexColumn,
            styles.ml20,
            styles.w75
          )}
        >
          <h3 className={cx(styles.noMargin)}>
            Hello from the Hotel Details component
          </h3>
          <h5 className={cx(styles.noMargin, styles.subtitle)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
            lectus sed viverra accumsan. Curabitur ultrices efficitur sodales.
            Ut diam sapien, maximus semper ex nec, hendrerit maximus felis
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
