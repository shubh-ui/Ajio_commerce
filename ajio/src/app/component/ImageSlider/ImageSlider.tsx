'use client'

import React, { useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";


const ImageSlider = () => {
  // Sample slides data
  const slides = [
    {
      id: 1,
      image: '/images/slider-1.png',
      title: 'Follow us on Instagram',
      subtitle: 'for more Giveaways, Discount, Life style, Tips and Tricks!',
      cta: 'Follow!',
      overlayText: true
    },
    {
      id: 2,
      image: '/images/slider-2.png',
      title: 'STUNNING NEW ARRIVALS',
      subtitle: 'TRENDY OUTFIT OF THE MONTH',
      website: 'www.developergoswami.com',
      overlayText: true
    },
    {
      id: 3,
      image: '/images/slider-3.png',
      title: 'Summer Collection',
      subtitle: 'Discover the latest trends',
      overlayText: true
    },
    {
      id: 4,
      image: '/images/slider-4.png',
      title: 'Exclusive Deals',
      subtitle: 'Up to 50% off on selected items',
      overlayText: true
    }
  ];


const images = [
  { url: "/images/slider-1.png" },
  { url: "/images/slider-2.png" },
  { url: "/images/slider-3.png" },
  { url: "/images/slider-4.png" }
];

  return (
    <div >
       <SimpleImageSlider
        width={1899}
        height={680}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};

export default ImageSlider;