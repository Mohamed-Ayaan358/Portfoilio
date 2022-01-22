import './App.css';
import React, { Component } from "react";
import {Container,Row,Col} from 'react-bootstrap';
function Intro() {
  function sayHello() {
    alert('Hello!');
  }
    return(
        <Container style={{backgroundColor:"black"}}>
  <Row>
    <Col >
    <img className="circular--square" src="ayaan.jpeg" />
    <p className="row " style={{color:"#2DD4BF",fontWeight: "bold" ,paddingRight:"10vh" ,paddingTop:"40px" ,fontSize:"40px"}}>
        Hi ! My name is Mohamed Ayaan and I am an aspiring web developer.
    </p></Col>
    <Col lg={4}>
    <model-viewer onClick={sayHello} style={{backgroundColor:"black"}} id="model" src="laptop.glb" autorotate camera-controls></model-viewer></Col>
  </Row>
  
</Container>  
    ) 
}


export default Intro;
