import './coverflow.css';
import React, { Component } from "react";
import Coverflow from 'react-coverflow';
import ReactDOM from 'react-dom';
import {Container,Row,Col} from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

class Cover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
       isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }


  render() {
    return (
    
        <Coverflow
    width={500}vh
    height={500}vh
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
  
    <div
      role="menuitem"
      tabIndex="0"
    >
    
      <img
        src='Planet.png'
        alt='Three.js example blog'
        style={{ display: 'block', width: '100%' }}
        data-action="https://github.com/Mohamed-Ayaan358/3D-Portflio"
      />
    </div>
    <img
        src='secrets.png'
        alt='Secrets'
        style={{ display: 'block', width: '100%' }}
        data-action="https://github.com/Mohamed-Ayaan358/Secrets"
      />

    <img
        src='Clip.png'
        alt='Clypboard'
        style={{ display: 'block', width: '100%' }}
        data-action="https://github.com/Mohamed-Ayaan358/clipboard_frontend"
      />
       <img
        src='twitter.jpg'
        alt='Twitter'
        style={{ display: 'block', width: '100%' }}
        data-action="https://github.com/Mohamed-Ayaan358/Twitter_sentiment_analysis"
      />
  </Coverflow>
        )};
}

export default Cover;