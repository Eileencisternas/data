import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import marvel from '../asset/img/logo.png'

function NavbarMarvel({ searchInput, setSearchInput }) {
    //onchange es un capturador de eventos por lo que al pasarle la funcion handlechange estamos indicando que captura el evento y luego ese valor lo actualiza con el setSearchInput,
    //esa funcion es el padre  y actualiza el estado global searchinput, el cual usaremos en el llamado de la api.
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className='containerNav'>
                <Container >
                    <Navbar.Brand >
                        <h1>Api Marvel</h1>
                    </Navbar.Brand>
                    <section className="search">

                        <input type="search"
                            placeholder="Buscar Personaje"
                            className="me-2"
                            aria-label="Search"
                            autoFocus
                            value={searchInput}
                            onChange={handleChange} />

                    </section>
                    <img
                        alt="imagen marvel"
                        src={marvel}
                        width="100"
                        height="50"
                    />
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarMarvel;




