import React from "react";

export default function Welcome({ name }) {
  //without destructuring = Welcome(props) and <h1> Hello, {props.name}</h1>
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
