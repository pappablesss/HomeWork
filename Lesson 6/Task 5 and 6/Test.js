import React, { Component } from "react";

function Test(props) {
  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-header">
        <strong>USERID:</strong>
        {props.userId}
      </div>
      <h4 className="card-title">
        <strong>title:</strong>
        {props.title}
      </h4>
      <div className="card-body">
        <strong>body:</strong>
        {props.body}
      </div>
    </div>
  );
}
export default Test;
