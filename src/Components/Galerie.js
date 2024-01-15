import React, { useState,useEffect } from 'react'

import slider1 from '../assets/img/Photos/1.jpeg'
import slider2 from '../assets/img/Photos/2.jpeg'
import slider3 from '../assets/img/Photos/3.jpeg'
import slider5 from '../assets/img/Photos/5.jpeg'
import slider6 from '../assets/img/Photos/6.jpeg'
import slider7 from '../assets/img/Photos/7.jpeg'
import slider8 from '../assets/img/Photos/8.jpeg'
import slider9 from '../assets/img/Photos/9.jpeg'
import slider10 from '../assets/img/Photos/10.jpeg'
import slider11 from '../assets/img/Photos/11.jpeg'
import slider12 from '../assets/img/Photos/12.jpeg'
import slider13 from '../assets/img/Photos/13.jpeg'
import slider14 from '../assets/img/Photos/14.jpeg'
import slider15 from '../assets/img/Photos/15.jpeg'
import slider16 from '../assets/img/Photos/16.jpeg'
import slider17 from '../assets/img/Photos/17.jpeg'

import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Carousel = ({ items, active }) => {
  const [state, setState] = useState({
    active,
    direction: '',
  });


  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 3000); // Change la diapositive toutes les 3 secondes

    return () => {
      clearInterval(interval);
    };
  }, []); 
  const moveLeft = () => {
    const newActive = state.active - 1;
    setState({
      active: newActive < 0 ? items.length - 1 : newActive,
      direction: 'left',
    });
  };

  const moveRight = () => {
    setState({
      active: (state.active + 1) % items.length,
      direction: 'right',
    });
  };

  const generateItems = () => {
    const generatedItems = [];
    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      const level = state.active - i;
      generatedItems.push(
        <CSSTransition key={index} classNames="item" timeout={500}>
          <Item image={items[index]} level={level} />
        </CSSTransition>
      );
    }
    return generatedItems;
  };

  return (
    <div id="carousel" className="d-flex w-100">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <div  style={{marginInline:'110px'}}>
      <TransitionGroup>
        {generateItems()}
      </TransitionGroup>
      </div>
     
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
};

const Item = ({ image, level }) => {
  const className = `item level${level}`;
  return <img src={image} alt="" className={className} />;
};

export default function Galerie() {
  const items = [
    slider1,slider2,slider3,slider5,slider6,slider7,slider8,slider9,slider10,slider11,slider12,slider13,slider14,slider15,slider16,slider17];

  return (
    <div className='container-fluid d-flex'>
  <Carousel items={items} active={0} />

    </div>  
  
  )
}
