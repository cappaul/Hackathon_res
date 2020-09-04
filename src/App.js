import React from "react";
import SimpleTabs from "./components/Tabs";
import HomePage from "./pages/HomePage";

// { useState }

const App = () => {
  return (
    <SimpleTabs>
      <HomePage Label={"the first page"} />
      <HomePage Label={"the second page"} />
      <HomePage Label={"the n'th page"} />
      <HomePage Label={"the infinite page"} />
    </SimpleTabs>
  );
};

export default App;
