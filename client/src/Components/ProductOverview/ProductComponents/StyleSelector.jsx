import React, { useEffect, useState } from 'react';
import StylePhoto from './StylePhoto.jsx';
import Carousel from './Carousel.jsx';
//import ImageGallery from './ImageGallery.jsx';
//import SizeSelector from './SizeSelector.jsx';

const axios = require('axios');

export default function StyleSelector() {

  const [currentStyleArray, setCurrentStyleArray] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({photos: [1]});
  const [currentStylePhotos, setCurrentStylePhotos] = useState([]);
  const [styleRow1, setStyleRow1] = useState([]);
  const [styleRow2, setStyleRow2] = useState([]);
  const [styleRow3, setStyleRow3] = useState([]);
  const [loaded, setLoaded] = useState(false);



  // the function that sends out get request
  const getStyleFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/product/styles',
      params: { id: productId },
    })
      .then((response) => {
        console.log(response.data)
        setLoaded(true);
        setCurrentStyleArray(response.data.results);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((error) => {
        console.log('Error in getting data from getStyleFromProductId', error);
      });
  }
  console.log('row1: ', styleRow1);
  console.log('row2: ', styleRow2);
  console.log('row3: ', styleRow3);
  console.log('currentStyle is:',  currentStyle);

  // use product 40344 as a default testing product
  useEffect(() => {
    getStyleFromProductId(40344);

  }, [])

  // after axios call, immediate save all styles to three rows of 4
  useEffect(() => {
    //setCount((previousCount) => previousCount + 1)
    const styleRow = async() => {
      let row1Count = 0;
      let row2Count = 0;
      let row3Count = 0;
      for (let i = 0; i < currentStyleArray.length; i++) {
        if (row1Count < 4) {
          await setStyleRow1((previousStyle) => [...previousStyle, currentStyleArray[i]]);
          row1Count++;
        }
        else if (row2Count < 4) {
          await setStyleRow2((previousStyle) => [...previousStyle, currentStyleArray[i]]);
          row1Count++;
        } else if (row3Count < 4) {
          await setStyleRow3((previousStyle) => [...previousStyle, currentStyleArray[i]]);
          row1Count++;
        }
      }
    }
    styleRow()
      .catch((error) => console.log(error))
  }, [currentStyleArray])

  // // after currentStyle change,
  // useEffect(() => {
  //   setCurrentStylePhotos(currentStyle.photos)
  //   console.log('currentStyle from useEffect: ', currentStyle);
  // }, [currentStyle])

  const getPhotoUrlsForCurrentStyle = () => {
    let photos = currentStyle.photos;
    photos = photos.map((photo) => {
      return photo.url
    })
    return photos;
  }

  // map over each row of 4
  const styles1 = styleRow1.map((item, index) => {
    return (
      <StylePhoto key={index} currentStyle={item} setCurrentStyle={setCurrentStyle}/>
    )
  })
  const styles2 = styleRow2.map((item, index) => {
    return (
      <StylePhoto key={index} currentStyle={item} setCurrentStyle={setCurrentStyle}/>
    )
  })

  const styles3 = styleRow3.map((item, index) => {
    return (
      <StylePhoto key={index} currentStyle={item} setCurrentStyle={setCurrentStyle}/>
    )
  })

  // the currentStyle I pass in needs to be the result of a function I call
  // if(loaded) {
    return (
      <>
      <Carousel currentStyle={ currentStyle } productId={40344}/>
      <div className='StyleSelector'>
        ${currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price}
        <div><b>STYLE </b>▸ {currentStyle.name}</div>
        <ul className='styleRow1'>
          {styles1}
        </ul>
        <ul className='styleRow2'>
          {styles2}
        </ul>
        <ul className='styleRow3'>
          {styles3}
        </ul>
      </div>
      {/* <div className='SizeSelector'>
        <SizeSelector />
      </div> */}
      </>
    )
  // }

}
