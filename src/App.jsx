import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import './style.scss';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const increment = () => setPokemonIndex(pokemonIndex + 1);
  const decrement = () => setPokemonIndex(pokemonIndex - 1);

  useEffect(() => {
    alert("hello pokemon trainer :)");
    if (pokemonList[pokemonIndex].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, []);

  useEffect(() => {
    pokemonList[pokemonIndex].name === "pikachu"
      ? alert("pika pikachu !!!")
      : "";
  });

  return (
    <>
      <div>
        <Navbar
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
        />
        <PokemonCard
          pokemon={pokemonList[pokemonIndex] ? pokemonList[pokemonIndex] : ""}
        />
      </div>
    </>
  );
}

export default App;
