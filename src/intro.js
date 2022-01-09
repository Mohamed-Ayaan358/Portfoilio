import './App.css';
import React, { Component } from "react";
import {Container,Row,Col} from 'react-bootstrap';
function Intro() {
    return(
        <Container>
  <Row>
    <Col sm={8}>
    <img className="circular--square" src="ayaan.jpeg" />
    <h2 className="row " style={{color:"black",fontWeight: "bold" ,paddingRight:"150px" ,paddingTop:"40px" ,fontSize:"40px"}}>
        Hi ! My name is Mohamed Ayaan and I am an aspiring web developer.
    </h2></Col>
    <Col sm={4}>
    <model-viewer id="model" src="laptop.glb" autorotate camera-controls></model-viewer></Col>
  </Row>
  
</Container>  
    ) 
}


export default Intro;
