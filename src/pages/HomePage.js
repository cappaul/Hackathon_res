import React, { useState, useEffect } from "react";
import { getPokemon } from "./../service/GetPokemon";
import "./../styles.css";

const HomePage = (props) => {
  const [myHookContent, setMyHookContent] = useState("yay hooks");
  const [myPokemonSprites, setMyPokemonSprites] = useState([]);
  const [myPokemonContent, setMyPokemonContent] = useState([]);

  useEffect(() => {
    getPokemon(setMyPokemonContent, setMyPokemonSprites);
  }, []);

  return (
    <div className="App">
      <h1>Hello {props.Label}</h1>
      <h2>Start editing to see some magic happen!</h2>
      {myHookContent.split("").reverse()}
      <input
        placeholder={"change hook content"}
        onChange={(e) => setMyHookContent(e.target.value)}
      />
      {myPokemonContent.map((e, i) => (
        <div key={i} className="pokemon-placard">
          {e.name}
          <img src={myPokemonSprites[i]} alt={myPokemonSprites[9]}></img>
        </div>
      ))}
      <br />
    </div>
  );
};

export default HomePage;
