import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import CardMarvel from "./CardMarvel";

function MiApp({ searchInput }) {
    const [card, setCard] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getCardsMarvel();

    }, [searchInput]);
       const getCardsMarvel = async () => {
        setLoading(true)
        let url
        if (searchInput !== '') {
            url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput}&ts=1000&apikey=a00b1731d90037b001eea36719c623aa&hash=7ff1e7c9c4aed14accaa2e8806447d7b&limit=100`;
        } else {
            url = `http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=a00b1731d90037b001eea36719c623aa&hash=7ff1e7c9c4aed14accaa2e8806447d7b&limit=100`;
        }
        const response = await fetch(url)
        const data = await response.json()
        setCard(data.data.results)
        setLoading(false)
    }
    function LoadingCard() {
        return (
            <div className="spinnerContent">
                <Spinner animation="border" variant="light" role="status">
                </Spinner>
                <h1>CARGANDO...</h1>
            </div>
        );
    }

    //Se crea un ternario que pasa primero la condicion de que si esta cargando muestre el spinner de lo contrario cargue el contenedor y recorro el arreglo con los datos y por cada uno de ellos llamo el componente cardmarvel
    return (

        <div className="contentCard">
            {isLoading ? (<LoadingCard />) : (<Container>
                <Row xs="auto">
                    {card.map(function (element) {
                        return (<CardMarvel card={element} key={'CardM_' + element.id} />)
                    })}
                </Row>
            </Container>)}
        </div>
    )
}

export default MiApp;