//const breedFetcher { } = require('./breedFetcher');


const  { breedFetcher } = require('./breedFetcher');
const breedName = process.argv.slice(2);

breedFetcher(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

//breedFetcher(argInput);