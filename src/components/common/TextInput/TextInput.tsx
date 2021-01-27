import * as React from "react";
import cx from "classnames";
import styles from "./TextInput.module.css";

interface input {
  name?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: any;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

const TextInput = (props: input) => {
  return (
    <div className={cx(styles.container, styles.w100, styles.my15)}>
      <label className={cx(styles.label)}>
        {props.label}
        {props.required && "*"}
      </label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type || "text"}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        className={cx(styles.w75, styles.input)}
        required={props.required}
      />
    </div>
  );
};

export default TextInput;
