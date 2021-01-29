/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import cx from "classnames";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";
import { HotelConsumer } from "../../context";

interface props {
  name?: string;
  className?: string;
  placeholder?: string;
}

const SearchInput = (props: props) => {
  const [input, setInput] = React.useState<string>("");
  return (
    <div
      className={cx(
        styles.dflex,
        styles.flexvcenter,
        styles.searchInput,
        `${props.className}`
      )}
    >
      <BsSearch />
      <HotelConsumer>
        {(value): any => (
          <input
            type="search"
            name={props.name}
            value={input}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setInput(e.currentTarget.value);
              // value.search(input);
            }}
            onKeyUp={() => value.search(input)}
            placeholder={props.placeholder || "Search..."}
            className={cx(styles.input)}
          />
        )}
      </HotelConsumer>
    </div>
  );
};

export default SearchInput;
