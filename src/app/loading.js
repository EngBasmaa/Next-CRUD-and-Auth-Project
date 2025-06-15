import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="d-flex mt-4 justify-content-center align-items-center">
      <Spinner />
    </div>
  );
}
