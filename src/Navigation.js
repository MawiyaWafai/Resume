import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

const Navigation = () => {
    return ( 
    <div className="App">
        <Navbar>
            <Container fluid>
            <Navbar.Brand href="#">Mawiya Al Wafai</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/" style={{zIndex:100}}>Home</Nav.Link>
                <Nav.Link href="/Resume" style={{zIndex:100}}>Résumé</Nav.Link>
                <NavDropdown title="Work" id="basic-nav-dropdown" style={{zIndex:100}}>
                <NavDropdown.Item href="/Development">Development</NavDropdown.Item>
                <NavDropdown.Item href="/Design">Design</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    </div>
     );
}
 
export default Navigation;