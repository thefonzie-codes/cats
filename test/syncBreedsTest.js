const assert = require('chai').assert;
const breedDetails = require('../asyncBreeds');

describe('#breedDetails', () => {
  it('provides, via callback, breed details for the Bombay breed', () => {
    breedDetails('Bombay', (bombay) => {
      const expected = "'Bombay:' The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.strictEqual(expected, bombay);
      done();
    });
  });

describe('#breedDetails', () => {
  it('provides, via callback,undefined for a breed that does not exist', () => {
    breedDetails('Saphire', (desc) => {
      assert.strictEqual(undefined, desc);
      done();
      });
    });
  });
});