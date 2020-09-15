import React, { useState, useEffect } from "react";
import pokeHeader from "../resources/pokemon.png";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`;

const PokeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 20px;
  height: 300px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  /* box-shadow: 0px 0px 5px 0px #797c7f; */
`;

const PokeImage = styled.img`
  width: 82%;
  display: block;
  margin: 15px auto;
`;

const PokemonName = styled.h2`
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
  display: block;
  margin: 0 auto;
`;

const AbilityWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const PokemonAbility = styled.div`
  display: flex;
  margin: 6px;
  flex-flow: column;
  border-bottom: 2px solid black;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-size: cover;
  background-image: url(${pokeHeader});
`;

const Input = styled.input`
  font-size: 1em;
  height: 40px;
  width: 400px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline-color: #ade7f5;
  }
`;

const InfoContaier = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  width: 100%;
`;

const PokemonType = styled.div`
  margin: 3px;
  background-color: ${(props) => props.background};
`;

function Header({ handleChange, pokemon }) {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Search for pokemon" />
    </SearchContainer>
  );
}

const PokemonCard = (props) => {
  const pokemonInfo = props;

  function handleColor() {
    pokemonInfo.types.forEach((type) => {
      let pokeType = type.type.name;
      switch (pokeType) {
        case "grass":
          return "green";
        case "fire":
          return console.log("fire");
        case "water":
          return console.log("water");
        case "bug":
          return console.log("bug");
        case "flying":
          return console.log("flying");
        default:
          return console.log("normal");
      }
    });
  }
  //   handleColor();

  return (
    <PokeWrapper>
      <PokeImage src={pokemonInfo.sprites.front_default} />
      <PokemonName>{pokemonInfo.name}</PokemonName>
      <InfoContaier>
        {pokemonInfo.types.map((type, i) => (
          <PokemonType key={i} background={handleColor()}>
            {type.type.name}
          </PokemonType>
        ))}
        {/* <AbilityWrapper>
            {pokemonInfo.abilities.map((ability, i) => (
              <PokemonAbility key={i}>{ability.ability.name}</PokemonAbility>
            ))}
          </AbilityWrapper> */}
        {/* {pokemonInfo.stats.map((stat, i) => (
            <div>
              <div>{stat.base_stat}</div>
              <div>{stat.stat.name}</div>
            </div>
          ))} */}
      </InfoContaier>
    </PokeWrapper>
  );
};

// class PokemonCard extends React.Component {
//   render() {
//     const pokemonInfo = this.props;
//     return (
//       <PokeWrapper>
//         <PokeImage src={pokemonInfo.sprites.front_default} />
//         <PokemonName>{pokemonInfo.name}</PokemonName>
//         <InfoContaier>
//           {pokemonInfo.types.map((type, i) => (
//             <PokemonType key={i}>{type.type.name}</PokemonType>
//           ))}
//           {/* <AbilityWrapper>
//             {pokemonInfo.abilities.map((ability, i) => (
//               <PokemonAbility key={i}>{ability.ability.name}</PokemonAbility>
//             ))}
//           </AbilityWrapper> */}
//           {/* {pokemonInfo.stats.map((stat, i) => (
//             <div>
//               <div>{stat.base_stat}</div>
//               <div>{stat.stat.name}</div>
//             </div>
//           ))} */}
//         </InfoContaier>
//       </PokeWrapper>
//     );
//   }
// }

function PokeList() {
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
    // if (data.length > 0) {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokeInfo(_pokemonData);
    // }
  };

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      //   console.log(response.results, "data from useeffect");
      await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <WrapperCards>
        {/* {console.log(pokeInfo)} */}
        {pokeInfo.map((pokemon, i) => {
          return <PokemonCard key={i} {...pokemon} />;
        })}
      </WrapperCards>
    </Wrapper>
  );
}

const EinoPage = () => {
  function handleChange(e) {
    setPokeName(e.target.value);
    console.log(e.target.value, "value from handlechange");
  }

  return (
    <div>
      <Container fixed>
        <Header handleChange={handleChange} />
        <PokeList />
      </Container>
    </div>
  );
};

export default EinoPage;
