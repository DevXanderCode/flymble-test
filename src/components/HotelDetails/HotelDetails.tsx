import * as React from "react";
import cx from "classnames";
import styles from "./HotelDetails.module.css";

interface Props {
  name?: string;
  subTitle?: string;
}

const HotelDetails: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={cx(styles.container, styles.m10)}>
        <img src={"https://via.placeholder.com/120"} alt="hotel" />
        <div
          className={cx(
            styles.flex,
            styles.nowrap,
            styles.flexColumn,
            styles.ml20,
            styles.w75
          )}
        >
          <h3 className={cx(styles.noMargin, styles.lineHeight2)}>
            {props.name || "Hello from the Hotel Details component"}
          </h3>
          <h5 className={cx(styles.noMargin, styles.subtitle)}>
            {props.subTitle ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor lectus sed viverra accumsan. Curabitur ultrices efficitur sodales.Ut diam sapien, maximus semper ex nec, hendrerit maximus felis"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
