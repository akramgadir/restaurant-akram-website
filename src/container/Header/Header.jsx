import React from 'react';
import './Header.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const Header = () => (
  //give it an id of home so we can scroll to it
  <>
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app_wrapper_info'>
    <SubHeading title='Chase The New Flavour'/>
    <h1 className='app__header-h1'>The Key to Fine Dining</h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <button className='custom__button'>Explore Menu</button>
    </div> 
  </div>
  <div className='app__header_img'>
    <img src={images.welcome} alt="header-img" />

  </div>
</>
);

export default Header;
