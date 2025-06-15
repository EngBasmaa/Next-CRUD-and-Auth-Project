import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function SpinnerLoader() {
  return (
    <div style={{ height: "400px" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
