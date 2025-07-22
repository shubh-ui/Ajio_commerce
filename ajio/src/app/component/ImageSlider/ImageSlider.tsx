  'use client'

  import React, { useState, useEffect } from 'react';
  import SimpleImageSlider from "react-simple-image-slider";

  const ImageSliderWithAutoChange = ({ slides, width = 1899, height = 680, startIndex = 1}: any) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [loading, setLoading]= useState(true);
    const [loadedSlides, setLoadedSlides] = useState<any[]>([
    { url: "/images/slider-1.png" },
    { url: "/images/slider-2.png" },
    { url: "/images/slider-3.png" },
    { url: "/images/slider-4.png" }
  ]);

    useEffect(() => {
      if (slides && slides.length > 0) {
        setLoadedSlides(slides);
        setLoading(false);
      } else {
        // Handle case where slides are empty or not available yet
        console.error("Slides data is empty or undefined");
      }
    }, [slides]);

    useEffect(() => {
      if (loadedSlides.length > 0) {
        // Automatically change index after 2 seconds (or adjust timing)
        console.log({startIndex})
        const timeout = setTimeout(() => {
          const newIndex = startIndex ? startIndex : (currentIndex + 1) % loadedSlides.length; // Loop through the slides
          setCurrentIndex(newIndex);
        }, 2000); // 2-second delay

        return () => clearTimeout(timeout); // Clean up timeout on unmount
      }
    }, [currentIndex, loadedSlides.length]);

    useEffect(() => {
      setCurrentIndex(startIndex);
    },[startIndex])

    if (loadedSlides.length === 0) {
      return <div>Loading...</div>; // Show loading state if slides are not available
    }

    console.log({currentIndex})

    return (
      <div>
        <SimpleImageSlider
          width={width}
          height={height}
          images={loadedSlides}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          loop={true} // Ensure looping is enabled
          startIndex={currentIndex}
          onClickBullets={(idx: number) => setCurrentIndex(idx)} // Update index on bullet click
        />
      </div>
    );
  };

  export default ImageSliderWithAutoChange;
