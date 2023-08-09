import React from "react";
import CashSlip from "./CashSlip";
import { BsArrowLeft } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row,Col } from "react-bootstrap";

const NewCashSlip = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Nav.Link href="#action1"><BsArrowLeft /></Nav.Link>
      
        <Navbar.Brand href="#">Add New Cash Slip</Navbar.Brand>
               <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
           <Button variant="outline-success" style={{alignItems:"center"}}>Done</Button>
          </Nav>
          <Nav.Link href="#action1"><h2><GiCancel /></h2></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <CashSlip />
    </div>
  );
};

export default NewCashSlip;
