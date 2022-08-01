const axios = require('axios');

describe('Posting a review to the API ', () => {

  beforeEach( function() {

    const createReq = (id) => (
      const body = {
        product_id: 900,
        rating: 3,
        summary: `That'll do pig, that'll do!`,
        body: "This is how i am going to test this route and see if it works!",
        recommend: true,
        name: 'Echasketch',
        email: 'eSketch@aol.com',
        characteristics: {
          2991: 2,
          2992: 3,
          2993: 4,
          2994: 3
        }
      };
      axios.post(`localhost:3000/reviews`, body);
    )

  });


  it('Should sucessfully retrieve data from the database', () => {
    //check status code
    createReq(40438)
    .then((res) = > {
      expect(res.status).toBe(200);
    });
    //check data
    createReq(780)
    .then(({data}) = > {
      expect(data).toBeDefined();
    });
  });


  it('The information should be for the product specified in the request', () => {
    //get the review for comparision
    createReq(40438)
    .then(({data}) = > {
      expect(data.id).toBe(40438);
    });
    createReq(780)
    .then(({data}) = > {
      expect(data.id).toBe(780);
    });
  });

});