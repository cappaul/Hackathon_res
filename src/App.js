import React from "react";
import SimpleTabs from "./components/Tabs";
import HomePage from "./pages/HomePage";
import EinoPage from "./pages/EinoPage";
import LisaPage from "./pages/LisaPage";
// { useState }

const App = () => {
  return (
    <div>
      {/* sfljksajdf */}
      <div>LOGO $$$Pokemons4cash$$$</div>
      <SimpleTabs>
        <div Label={"Readme Jenny"}>
          intro Her skal vi lage:
          <br />
          noe
          <br />
          Buy a bulbasaur get a free caterpie
        </div>

        <HomePage Label={"Paul page"} />
        <HomePage Label={"Pål page"} />
        <EinoPage Label={"Eino page"} />
        <LisaPage Label={"Lisa page"} />

        <HomePage Label={"the TEAM page"} />
      </SimpleTabs>
    </div>
  );
};

export default App;
