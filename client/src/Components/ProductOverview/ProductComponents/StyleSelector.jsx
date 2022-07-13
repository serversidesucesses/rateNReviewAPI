import React, { useEffect, useState } from 'react';
import click from './Click.jsx';
import StylePhoto from './StylePhoto.jsx';
const axios = require('axios');

export default function StyleSelector() {

  const [currentStyleArray, setCurrentStyleArray] = useState([]);
  const [currentStyleName, setCurrentStyleName] = useState('Placeholder current style name');
  const [currentPrice, setCurrentPrice] = useState(0);

  const [styleRow1, setStyleRow1] = useState([]);
  const [styleRow2, setStyleRow2] = useState([]);
  const [styleRow3, setStyleRow3] = useState([]);




  const getStyleFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/product/styles',
      params: { id: productId },
    })
      .then((response) => {
        console.log(response.data)
        setCurrentStyleName(response.data.results[0].name);
        setCurrentStyleArray(response.data.results);
      })
      .catch((error) => {
        console.log('Error in getting data from getStyleFromProductId', error);
      });
  }
  console.log('row1: ', styleRow1);
  console.log('row2: ', styleRow2);
  console.log('row3: ', styleRow3);

  // use product 40344 as a default testing product
  useEffect(() => {
    console.log('got to useEffect');
    getStyleFromProductId(40344);

  }, [])

  useEffect(() => {
    const styleRow = async() => {
      // setStyleRow1(() => currentStyleArray.slice(0,4));
      // setStyleRow2(() => currentStyleArray.slice(4,8));
      let row1Count = 0;
      let row2Count = 0;
      let row3Count = 0;
      for (let i = 0; i < currentStyleArray.length; i++) {
        if (row1Count < 4) {
          // console.log('styleRow1 is: ', styleRow1)
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


  // update the style id base on user
  // updateStyleId(event) {
  //   click()
  // }


  // map over the array
  const styles1 = styleRow1.map((item, index) => {
    return (
      // <li key={index}>{item}</li>
      // currentPirce and currentStyleName are both passed in
      <StylePhoto key={index} photos={item.photos[0]} price={item.sale_price ? item.sale_price : item.original_price} setCurrentPrice={setCurrentPrice} currentStyleName={item.name}setCurrentStyleName={setCurrentStyleName}/>
    )
  })
  const styles2 = styleRow2.map((item, index) => {
    return (
     //<li key={index}>{item}</li>
      <StylePhoto key={index} photos={item.photos[0]} price={item.sale_price ? item.sale_price : item.original_price} setCurrentPrice={setCurrentPrice} currentStyleName={item.name}setCurrentStyleName={setCurrentStyleName}/>
    )
  })
  const styles3 = styleRow3.map((item, index) => {
    return (
      //<li key={index}>{item}</li>
      <StylePhoto key={index} photos={item.photos[0]} price={item.sale_price ? item.sale_price : item.original_price} setCurrentPrice={setCurrentPrice} currentStyleName={item.name}setCurrentStyleName={setCurrentStyleName}/>
    )
  })

  return (

    <div className='styleSelector'>
      ${currentPrice}
      <div><b>STYLE </b>▸ {currentStyleName}</div>
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
  )
}
