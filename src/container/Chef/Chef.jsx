import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper'>
    
  <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt="chef" />
  </div>

  <div className='app__wrapper_info'>
    <SubHeading title='Chef&apos;s Word'/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>
  </div>
  </div>
);

export default Chef;
