import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
 const scrollRef = useRef(null)

  const scroll = (direction) =>{
    const {current} = scrollRef

    if (direction==='left') {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }
  }
return  (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title='Instagram'/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}></div>
    </div>
    <div className='app__gallery-images_arrows'></div>
      <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')}/>
      <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')}/>
  </div>
  )
  }

export default Gallery;
