import PropTypes from "prop-types";

function PokemonCard(props) {
  console.log(props);

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };

  return (
    <figure>
      {props.pokemon.imgSrc ? (
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>
        <p>{props.pokemon.name}</p>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
