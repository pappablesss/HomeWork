import React from "react";

function DisplayComponent(display) {
  display = true;
  return <p>{Boolean(display) && <p>You are in</p>}</p>;
}
export default DisplayComponent;
