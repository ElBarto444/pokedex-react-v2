function PokemonCard(props) {
    console.log(props)

  return (
    <figure>
      {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> : <p>???</p>}
      <figcaption>
        <p>{props.pokemon.name}</p>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
