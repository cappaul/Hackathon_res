import React, { useState, useEffect } from "react";
import { getPokemon } from "./../service/GetPokemon";
import "./../styles.css";

const LisaPage = (props) => {
  const [myPokemonSprites, setMyPokemonSprites] = useState([]);
  const [myPokemonContent, setMyPokemonContent] = useState([]);

  useEffect(() => {
    getPokemon(setMyPokemonContent, setMyPokemonSprites);
  }, []);

  // Fasit
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
      <h1>Oppgave x </h1>
      <p>Sorter pokemonene i lista etter navn:</p>
      <table>
        <tr>
          <td>
            {myPokemonContent.map((e, i) => (
              <ul className="liste">
                <li>{e.name}</li>
              </ul>
            ))}
          </td>
          <td>
            {/* Fasit */}
            {sortedPokemons.map((e, i) => (
              <ul className="liste">
                <li>{e.name}</li>
              </ul>
            ))}
          </td>
        </tr>
      </table>

      <br />
      <h1>Oppgave 2x</h1>
      <p>Hvorfor vises ikke bildene av pokemonene?</p>
      {myPokemonContent.map((e, i) => (
        <div key={i} style={{ display: "inline" }}>
          <img src={myPokemonSprites} alt={myPokemonSprites[9]}></img>
        </div>
      ))}

      <br />
      <h1>Oppgave 3x</h1>
      <p>
        Lag en oversikt over 6 pokemons med navn og pris for å få en oversikt
        over litt av utvalget i butikken?
      </p>

      <br />
      <h1>Oppgave 4x</h1>
      <p></p>
    </div>
  );
};

export default LisaPage;
