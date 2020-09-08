import React from "react";
import SimpleTabs from "./components/Tabs";
import HomePage from "./pages/HomePage";
import EinoPage from "./pages/EinoPage";
// { useState }

const App = () => {
  return (
    <SimpleTabs>
      <HomePage Label={"the Eino page"} />
      <EinoPage Label={"other page"} />
      <HomePage Label={"the TEAM page"} />
      <HomePage Label={"the n'th page"} />
      <HomePage Label={"the infinite page"} />
    </SimpleTabs>
  );
};

export default App;
