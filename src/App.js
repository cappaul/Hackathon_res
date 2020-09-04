import React from "react";
import SimpleTabs from "./components/Tabs";
import HomePage from "./pages/HomePage";

// { useState }

const App = () => {
  return (
    <SimpleTabs>
      <HomePage Label={"the first page"} />
      <HomePage Label={"the second page"} />
    </SimpleTabs>
  );
};

export default App;
