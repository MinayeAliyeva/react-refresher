//1import react ve react dom library
import React from "react";
import ReactDom from "react-dom/client";
//2get a refferande the div with ID root
const el = document.getElementById("root");
//3tell react to take control of that element
const root = ReactDom.createRoot(el);
//4creaat a component
function App() {
  return <h1>Hi</h1>;
}
//5show component on the screen
root.render(<App />);
