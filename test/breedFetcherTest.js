const { breedFetcher } = require('../breedFetcher');

const { assert } = require('chai');

describe('breedFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedFetcher('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns a string err for a invalid breed, via callback', (done) => {
    breedFetcher('ind', (err, desc) => {
      // we expect error for this scenario
      assert.equal(err, null);      

      const expectedErr = 'Please enter the correct breed name or spelling. Breed you searched for is not found';

      // compare returned description
      assert.equal(expectedErr, desc.trim());

      done();
    });
  });


});