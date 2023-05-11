import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return <Home />;
};
const container = document.getElementById("root");
render(<App />, container);
