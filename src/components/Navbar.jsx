function Navbar({ pokemonList, pokemonIndex, setPokemonIndex }) {
  function handleClick(index) {
    return setPokemonIndex(index);
  }
  return (
    <>
      <h1>Pokemon list</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
