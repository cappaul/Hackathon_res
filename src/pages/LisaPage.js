import React, { useState, useEffect } from "react";
import { getPokemon } from "./../service/GetPokemon";
import "./../styles.css";

// Oppgaver:
// - Som kjøper ønsker jeg at pokemons i butikken skal være sortert baser på navn
// - Som kjøper ønsker jeg å enkelt se hva de forskjellige pokemonene koster
// - Som kjøper ønsker jeg et brukervennlig design i butikken
// - Som kjøper ønsker jeg å få mer informasjon om hver pokemon ved å trykke på den
// - Som kjøper ønsker jeg å legge pokemon til i handlekurv

const LisaPage = (props) => {
  const [myPokemonSprites, setMyPokemonSprites] = useState([]);
  const [myPokemonContent, setMyPokemonContent] = useState([]);

  useEffect(() => {
    getPokemon(setMyPokemonContent, setMyPokemonSprites);
  }, []);

  const buyPokemon = () => {
    alert("Great Buy!");
  };

  // Fasit - sortere pokemons
  let sortedPokemons = [...myPokemonContent];
  sortedPokemons.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon"
        style={{ width: "350px", alignItem: "center" }}
      ></img>{" "}
      <h1
        style={{
          display: "inline",
          fontSize: "100px",
          color: "#3D7DCA",
          textShadow: "2px 2PX #003A70"
        }}
      >
        - 4cash
      </h1>
      <p>
        Kjøp pokemons du vil ha, som er fit for fight. Pokemon4cash tilbyr søte,
        kamplare og dødelige kjæledyr til alle og enhver! Hjelp pokemon4cash å
        gjøre butikken klar!
      </p>
      {myPokemonContent.map((e, i) => (
        <div
          key={i}
          style={{
            display: "inline-flex",
            width: "150px",
            height: "200px",
            margin: "10px"
          }}
        >
          <button onClick={buyPokemon} style={{ backgroundColor: "white" }}>
            {e.name}
            <img src={myPokemonSprites[i]} alt={myPokemonSprites}></img>
            <b>Pris 99kr</b>
          </button>
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Sortering:</p>
      <div
        style={{
          display: "inline-grid",
          border: "1px solid black",
          width: "200px",
          margin: "10px"
        }}
      >
        {myPokemonContent.map((e, i) => (
          <ul>
            <li>{e.name}</li>
          </ul>
        ))}
      </div>
      <div
        style={{
          display: "inline-grid",
          border: "1px solid black",
          width: "200px"
        }}
      >
        {/* Fasit med sorterte pokemons */}
        {sortedPokemons.map((e, i) => (
          <div className="grid-item">
            <ul>
              <li>{e.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LisaPage;
