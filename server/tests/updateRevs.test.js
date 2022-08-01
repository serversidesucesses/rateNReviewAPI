const axios = require('axios');

describe('Using API to update helpfulness ', () => {

  // beforeEach(
  //   const createReq = (id) => (axios.put(`http://localhost:3000/reviews/${id}`))
  // )

  it('Should increment review for helpfulness', () => {
    //get the review for comparision

    //update the value

    //get again to verify
  axios.get('http://localhost:3000/products/1')
    .then(({data}) => {
      expect(data.id).toBe(1);
      expect(data.features).toEqual(Features);
    });
  });


  it('Should increment review for helpfulness', () => {

    //post review

    //send put request
      //check return value for correct num
  axios.get('http://localhost:3000/products/1')
    .then(({data}) => {
      expect(data.id).toBe(1);
      expect(data.features).toEqual(Features);
    });
  });


  it('Should allow multiple puts from same sessions-id, but not on same review', () => {
    const review_id1 = 40438;
    const review_id2 = 43438;
    axios.get('http://localhost:3000/reviews/${review_id1})
    .then(({data}) => {  });
    });
}