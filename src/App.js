import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import './App.css';

function App() {
    return(
    <Navbar bg="black" expand="lg"  id="nav"style={{padding:"0px"}}>
  <Container fluid style={{ maxHeight:'auto',paddingTop:'60px',paddingBottom:"60px"}}>
    <Navbar.Brand href="#" style={{color:"white",fontSize:'30px',fontWeight: "bold",Right:"2vh"}}><img src="monitor.png"/>The IONsphere</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarscroll
      >
        <Nav.Link  style={{color:"white",fontWeight: "bold",paddingRight:"150px",paddingTop:'40px'}} className="me-auto my-2 my-lg-0" href="#action1">Home</Nav.Link>
        <Nav.Link style={{color:"white",fontWeight: "bold",paddingRight:"150px",paddingTop:'40px'}} href="#action2">Contact</Nav.Link>
        <Nav.Link style={{color:"white",fontWeight: "bold",paddingRight:"150px",paddingTop:'40px'}} href="#action2">Ideas</Nav.Link>
        <Nav.Link style={{color:"white",fontWeight: "bold",paddingRight:"150px",paddingTop:'40px'}} href="#action2">Projects</Nav.Link>
       
        

       
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
