import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.svg'
import './style.css'
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-header">
      <Container >
        <Navbar.Brand className='' href="/Home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link className='fs-5' href="/Home">Tela Inicial</Nav.Link>
            <Nav.Link className='fs-5' href="/About">Remedios</Nav.Link>
            <Nav.Link className='fs-5' href="/Project">Cadastrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;