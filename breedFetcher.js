const request = require('request');
const input = process.argv.slice(2);
let requestInput = `https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`;
console.log(requestInput);
request(requestInput, (error,body,response) => {
  
  //console.log('response---',response);

  if (error !== null) {
    console.log('Requested domain is not found. Please enter the domain correctly');
    //console.log(error);
  } else {
    if (response === '[]') {
      console.log('Please enter the correct breed name or spelling. Breed you searched for is not found');
    } else {
      const data = JSON.parse(response);
      console.log(data[0]['description']);
    }
  }
  
  
});