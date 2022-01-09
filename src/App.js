import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import './App.css';

function App() {
    return(
    <Navbar bg="black" expand="lg"  id="nav"style={{padding:"0px"}}>
  <Container fluid style={{ maxHeight:'auto',padding:'60px'}}>
    <Navbar.Brand href="#" style={{color:"white",fontSize:'30px',fontWeight: "bold",paddingRight:"300px"}}>The IONsphere</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link  style={{color:"white",fontWeight: "bold",paddingRight:"150px",paddingTop:'40px'}} className="me-auto my-2 my-lg-0" href="#action1">Home</Nav.Link>
        <Nav.Link style={{color:"white",fontWeight: "bold",paddingRight:"150px",paddingTop:'40px'}} href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item style={{fontWeight: "bold"}} href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item style={{fontWeight: "bold"}} href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
        
        </NavDropdown>
       
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    ) 
}


export default App;
