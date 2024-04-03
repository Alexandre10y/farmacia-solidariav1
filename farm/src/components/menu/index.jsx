import ListGroup from 'react-bootstrap/ListGroup';

function Menu() {


    return (
        <ListGroup className='w-50'>
            <ListGroup.Item variant="dark"><span>MENU RÁPIDO</span></ListGroup.Item>
            <ListGroup.Item action href="#link1">
                Nova Entreda
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
                Novo Doador
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
                Nova Retirada
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
                Novo Retirante
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Menu;