import React, { useState, useEffect } from "react";
import pokeHeader from "../resources/pokemon.png";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import "../einopage.css";

// const WrapperCards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   background-color: #f2f2f2;
// `;

// const PokeWrapper = styled.div`
//   display: flex;
//   flex-flow: column;
//   margin: 20px;
//   height: 300px;
//   width: 220px;
//   border-radius: 5px;
//   border: 1px solid #d9d9d9;
// `;

// const PokeImage = styled.img`
//   width: 82%;
//   display: block;
//   margin: 15px auto;
// `;

// const PokemonName = styled.h2`
//   margin: 0;
//   font-weight: bold;
//   text-transform: capitalize;
//   display: block;
//   margin: 0 auto;
// `;

// const AbilityWrapper = styled.div`
//   display: flex;
//   flex-flow: column;
// `;

// const PokemonAbility = styled.div`
//   display: flex;
//   margin: 6px;
//   flex-flow: column;
//   border-bottom: 2px solid black;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 400px;
//   width: 100%;
//   background-size: cover;
//   background-image: url(${pokeHeader});
// `;

// const Input = styled.input`
//   font-size: 1em;
//   height: 40px;
//   width: 400px;
//   border-radius: 5px;
//   border: none;
//   &:focus {
//     outline-color: #ade7f5;
//   }
// `;

// const InfoContaier = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-flow: row;
//   width: 100%;
// `;

// const PokemonType = styled.div`
//   margin: 3px;
//   padding: 3px;
//   border-radius: 3px;
//   text-transform: capitalize;
// `;

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
