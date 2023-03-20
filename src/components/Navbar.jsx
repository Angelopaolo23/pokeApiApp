import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

const NavBar = () => {
    const setActive = ({isActive}) => (isActive ? "active" : "inactive");
    return (
    <div className="bg-warning d-flex align-items-center p-1">
            <img className="ms-5" src="https://i.pinimg.com/originals/60/0e/17/600e1767f264672423b477944ec96a49.png" width="40px"/>
            <Container className="d-flex justify-content-end">
                <NavLink className={setActive} to="/">
                    Home
                </NavLink>
                <NavLink className={setActive} to="/pokemones/">
                    Pokemones
                </NavLink>
            </Container>
            
            
    </div>
    );
};


export default NavBar;