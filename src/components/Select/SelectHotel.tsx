import * as React from "react";
import styles from "./SelectHotel.module.css";

interface InputProps {
  options: number[];
  value?: number;
  onChange?: any;
}

type Inputs = InputProps;

const SelectHotel = (props: Inputs) => {
  const options =
    props.options &&
    [0, ...props.options].map((item) => (
      <option value={item && item} key={item}>
        {item}
      </option>
    ));

  return (
    <div className={styles.selectContainer}>
      <label htmlFor="select" className={styles.label}>
        Night(s)
      </label>
      <select
        id="select"
        value={props.value}
        className={styles.select}
        onChange={props.onChange}
      >
        {options}
      </select>
    </div>
  );
};

export default SelectHotel;
