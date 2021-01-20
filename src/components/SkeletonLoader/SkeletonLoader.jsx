import * as React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
// import {RectShape } from ""

const SkeletonLoader = () => {
  return (
    <div
      style={{
        width: "95%",
        // height: "120px",
        margin: "10px",
        marginLeft: "20px",
        display: "flex",
      }}
    >
      <div style={{ margin: "10px", display: "flex", width: "100%" }}>
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
        <div style={{ display: "flex", width: "75%", flexDirection: "column" }}>
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
      <div
        style={{
          display: "flex",
          marginLeft: "15px",
        }}
      >
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <ReactPlaceholder
            delay={1}
            type={"textRow"}
            style={{ width: "100px" }}
            showLoadingAnimation={true}
          >
            <div />
          </ReactPlaceholder>
        </div>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "25px",
          }}
        >
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
