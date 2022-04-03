import React from "react";
import ReactDOM from "react-dom";
// var variable = 5;
const d = new Date();
var year = d.getFullYear();

const inlineStyle = {
  fontFamily: "lora",
  fontSize: "3rem",
  fontWeight: "100"
};

var img = "https://picsum.photos/250";
ReactDOM.render(
  <div>
    <h1 style={inlineStyle}> Hello Shubham</h1>
    <img src={img + "?grayscale"} alt="" />
  </div>,
  document.getElementById("root")
);
