import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const date = new Date();
const currenttime = date.getHours();

console.log(currenttime);

const customstyle = {
  color: ""
};

let greeting;

if (currenttime < 12) {
  greeting = "Good Morning";
  customstyle.color = "red";
} else if (currenttime < 18) {
  greeting = "Good Afternoon";
  customstyle.color = "blue";
} else {
  greeting = "Good Night";
  customstyle.color = "green";
}

root.render(
  <h1 className="heading" style={customstyle}>
    {greeting}
  </h1>
);
