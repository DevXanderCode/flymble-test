import * as React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const SkeletonLoader = () => {
  return (
    <div
      style={{
        width: "95%",
        // height: "120px",
        margin: "10px",
        display: "flex",
      }}
    >
      <ReactPlaceholder
        type={"rect"}
        ready={false}
        color="#E0E0E0"
        style={{ width: 120, height: 120 }}
      >
        <div />
      </ReactPlaceholder>
      <div style={{ display: "flex", width: "75%", flexDirection: "column" }}>
        <ReactPlaceholder type={"text"} ready={false} color="#E0E0E0" rows={1}>
          <div />
        </ReactPlaceholder>
        <ReactPlaceholder
          type={"text"}
          ready={false}
          color="#E0E0E0"
          rows={2}
          style={{ marginTop: "30px" }}
        >
          <div />
        </ReactPlaceholder>
      </div>
    </div>
  );
};

export default SkeletonLoader;
