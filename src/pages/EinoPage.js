import React, { useState, useEffect } from "react";
import { getPokemon } from "./../service/GetPokemon";
import "./../styles.css";

const EinoPage = (props) => {
  const [myHookContent, setMyHookContent] = useState("yay hooks");
  const [myPokemonSprites, setMyPokemonSprites] = useState([]);
  const [myPokemonContent, setMyPokemonContent] = useState([]);

  useEffect(() => {
    getPokemon(setMyPokemonContent, setMyPokemonSprites);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default EinoPage;
