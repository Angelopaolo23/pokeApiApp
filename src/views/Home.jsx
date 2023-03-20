import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1>Bienvenido maestro pokemón</h1>
            <img className="mt-3" alt="pikachu" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" width="350px" height="400px"/>
        </Container>
    )
};

export default Home;

