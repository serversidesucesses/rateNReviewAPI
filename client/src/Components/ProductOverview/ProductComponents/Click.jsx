// this file will handle all the clicking events
import React from 'react';
const axios = require ('axios');


const timeConverter = () => {
  let current = new Date(Date.now());
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = current.getFullYear();
  let month = months[current.getMonth()];
  let date = current.getDate();
  let hour = current.getHours();
  let min = current.getMinutes();
  let sec = current.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec + ' PDT';
  return time;
};
let currentTime = timeConverter();

const click = (element, widget) => {

  axios({
    method: 'post',
    url: '/products/click',
    params: { element: element, widget: widget, time: currentTime },
  })
    .then((data) => {
      console.log('Sucessfully logged click', data);
    })
    .catch((error) => {
      console.log('Error in logging data from click', error);
    });

};

export default click;

