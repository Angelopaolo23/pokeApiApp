import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokeList = () => {
    const [pokemonsInfo, setPokemonsInfo] = useState([]);
    const [pokemonID, setPokemonID] = useState(1);
    const navigate = useNavigate();

    const getAllPokemon = async () => {
        try {
            const data = await fetch ("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50");
            const { results } = await data.json();
            setPokemonsInfo(results);
        } catch (e) {
            alert(e.message)
        }
    };

    const goToPokemon = () => {
        navigate(`/pokemones/${pokemonID}`)
    };
    useEffect (() => {
        getAllPokemon();
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="https://www.pngarts.com/files/3/Pokemon-Logo-Transparent-Image.png" width="300px"/>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <h1>Selecciona un Pokémon de la lista.</h1>
                <Form.Select className="w-50 m-5" aria-label="Default select example" onChange={(e) => {setPokemonID(e.target.value)}}>
                    {pokemonsInfo.map((pokemon, i) => {
                        return(
                            <option key={i} value={i + 1}>{pokemon.name}</option>
                        )
                    })}
                </Form.Select>
                <Button className="bordered mx-5" variant="warning" onClick={goToPokemon}>Ver detalle</Button>
            </Container>
        </div>
    )
};

export default PokeList;
