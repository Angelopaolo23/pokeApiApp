import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, ListGroup} from "react-bootstrap";


const Result = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const { id } = useParams();
    const getSelectedPokemon = async () => {
        try{
            const selectedData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const { sprites, stats, forms } = await selectedData.json();
            let [hp, attack, defense, specialAttack, specialDefense, speed] = stats;
            [hp, attack, defense, specialAttack, specialDefense, speed] = [hp.base_stat, attack.base_stat, defense.base_stat, specialAttack.base_stat, specialDefense.base_stat, speed.base_stat];
            const statsPoke = [hp, attack, defense, specialAttack, specialDefense, speed];
            const pokemonImg = sprites.other["official-artwork"].front_default;
            const pokemonName = forms[0].name;
            setPokemonStats(statsPoke);
            setImageUrl(pokemonImg);
            setPokemonName(pokemonName);
        } catch (e) {
            alert(e.message)
        }
    };
    
    useEffect (() => {
        getSelectedPokemon();
    }, []);
    
    
    return (
    <div className="d-flex flex-column align-items-center">
        <Card style={{ width: '24rem' }} className="mt-4 mb-3">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title className="text-center display-4">{pokemonName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>HP: {pokemonStats[0]}</ListGroup.Item>
                <ListGroup.Item>Attack: {pokemonStats[1]}</ListGroup.Item>
                <ListGroup.Item>Defense: {pokemonStats[2]}</ListGroup.Item>
                <ListGroup.Item>Special Attack: {pokemonStats[3]}</ListGroup.Item>
                <ListGroup.Item>Special Defense: {pokemonStats[4]}</ListGroup.Item>
                <ListGroup.Item>Speed: {pokemonStats[5]}</ListGroup.Item>
            </ListGroup>
        </Card>
        <Link className="btn btn-warning" to="/pokemones">Volver</Link>
    </div>
    )
};


export default Result;