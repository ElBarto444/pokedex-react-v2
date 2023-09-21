function PokemonCard() {
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    const name = "bulbasaur";

    return (
        <figure>
            <img src={imgSrc} />
            <figcaption>
                <p>{name}</p>
            </figcaption>
        </figure>
    );
}

export default PokemonCard