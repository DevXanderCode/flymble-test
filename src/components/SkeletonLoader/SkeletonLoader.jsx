import * as React from "react";
import cx from "classnames";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import styles from "./Skeleton.module.css";

const SkeletonLoader = () => {
  return (
    <div className={cx(styles.dflex, styles.w95, styles.m10, styles.ml20)}>
      <div className={cx(styles.dflex, styles.m10, styles.w100)}>
        <ReactPlaceholder
          delay={1}
          showLoadingAnimation={true}
          type={"rect"}
          ready={false}
          color="#E0E0E0"
          style={{ width: 120, height: 120 }}
        >
          <div />
        </ReactPlaceholder>
        <div className={cx(styles.dflex, styles.w75, styles.flexcolumn)}>
          <ReactPlaceholder
            delay={1}
            type={"textRow"}
            ready={false}
            showLoadingAnimation={true}
            color="#E0E0E0"
          >
            <div />
          </ReactPlaceholder>
          <ReactPlaceholder
            delay={1}
            type={"text"}
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation={true}
            rows={2}
            style={{ marginTop: "30px" }}
          >
            <div />
          </ReactPlaceholder>
        </div>
      </div>
      <div className={cx(styles.dflex, styles.ml15)}>
        <div className={cx(styles.myauto)}>
          <ReactPlaceholder
            delay={1}
            type={"textRow"}
            style={{ width: "100px" }}
            showLoadingAnimation={true}
          >
            <div />
          </ReactPlaceholder>
        </div>
        <div className={cx(styles.myauto, styles.ml25)}>
          <ReactPlaceholder
            delay={1}
            type={"textRow"}
            style={{ width: "50px" }}
            showLoadingAnimation={true}
          >
            <div />
          </ReactPlaceholder>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
