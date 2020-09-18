import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import "../einopage.css";

const typeColor = {
  grass: "#78C850",
  water: "#6890F0",
  fire: "#F08030",
  bug: "#C6D16E",
  dragon: "#7038F8",
  electric: "#FAE078",
  fairy: "#F4BDC9",
  fighting: "#D67873",
  flying: "#A890F0",
  ghost: "493963",
  normal: "#C6C6A7",
  ice: "#BCE6E6",
  poison: "#C183C1",
  psychic: "#FA92B2",
  rock: "#D1C17D",
  steel: "#D1D1E0",
};

function Header({ handleChange }) {
  return (
    <div className="searchContainer">
      <input
        className="input-styled"
        type="text"
        placeholder="Search for pokemon"
        onChange={handleChange}
      />
    </div>
  );
}

const PokemonCard = (props) => {
  const pokemonInfo = props;
  return (
    <div className="pokeWrapper">
      <img className="pokeImg" src={pokemonInfo.sprites.front_default} />
      <div className="pokemonName">{pokemonInfo.name}</div>
      <div className="infoContainer">
        {pokemonInfo.types.map((type, i) => (
          <div
            className="pokemonType"
            key={i}
            style={{ backgroundColor: typeColor[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
};

function PokeList({ pokemon }) {
  return (
    <div className="wrapper">
      <div className="wrapperCards">
        {pokemon.map((pokemon, i) => {
          return <PokemonCard key={i} {...pokemon} />;
        })}
      </div>
    </div>
  );
}

const EinoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [pokeInfo, setPokeInfo] = useState([]);
  const initialURL = `https://pokeapi.co/api/v2/pokemon/`;

  function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );

    const results = pokeInfo.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
    if (searchTerm.length) {
      setPokeInfo(results);
    } else {
      setPokeInfo(_pokemonData);
    }
  };

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
    }
    fetchData();
  }, [searchTerm]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <Container fixed>
        <Header handleChange={handleChange} />
        <PokeList pokemon={pokeInfo} search={searchResults} />
      </Container>
    </div>
  );
};

export default EinoPage;
