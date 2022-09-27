import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CardMarvel({ card }) {
    return (

        <Col sm className='containerCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="cardItem" variant="top" src={`${card.thumbnail.path}.${card.thumbnail.extension}`} />
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CardMarvel