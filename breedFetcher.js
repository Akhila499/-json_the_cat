const request = require('request');

const breedFetcher = function(breedName, callback) {
  let argInput = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(argInput, (error,body,response) => {
    //console.log(error);
    
    if (error) {
      callback(error, null);
      //console.log('Requested domain is not found. Please enter the domain correctly');
      
    } else {
      if (response === '[]') {
        let x = 'Please enter the correct breed name or spelling. Breed you searched for is not found';
        callback(null , x);
      } else {
        const data = JSON.parse(response);
        //console.log(data[0]['description']);
        callback(null , data[0]['description']);
      }
    }
    
  });
};

//fetchBreedDescription(argInput);

module.exports = { breedFetcher };
