import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div",{id :"grandparent"},React.createElement("div",{id :"parent"},

[React.createElement("div",{id :"child"},[React.createElement("h1",{},"I am H23"),React.createElement("h2",{},"I am H2")]),

React.createElement("div",{id :"child"},[React.createElement("h1",{},"I am H1"),React.createElement("h2",{},"I am H2")])]));

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //object

root.render(heading); //render converts object to actual h1 tag that browser understands

