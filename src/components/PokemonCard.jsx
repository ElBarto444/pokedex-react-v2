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
    <figure className="card">
      <div className="cardUpper">
        {props.pokemon.imgSrc ? (
          <img
            className="pokpic"
            src={props.pokemon.imgSrc}
            alt={props.pokemon.name}
          />
        ) : (
          <p>???</p>
        )}
      </div>
      <div className="cardLower">
        <figcaption className="pokname">
          <p>{props.pokemon.name.toUpperCase()}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export default PokemonCard;
