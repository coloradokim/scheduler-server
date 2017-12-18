const assert = require('chai').assert;
const filters = require('../filters');

const hobbies = [{
  "id": 1,
  "activity": "shamatha meditation",
  "minTime": 10,
  "maxTime": 60,
  "counter": 0
}, {
  "id": 2,
  "activity": "hiking",
  "minTime": 30,
  "maxTime": 240,
  "counter": 0
}, {
  "id": 3,
  "activity": "reading",
  "minTime": 10,
  "maxTime": 60,
  "counter": 0
}];

describe('Filters', () => {
  describe('#findById()', () => {
    it('should return the hobby based on its id', () => {
      assert.deepEqual(filters.findById(hobbies, 2), {
        "id": 2,
        "activity": "hiking",
        "minTime": 30,
        "maxTime": 240,
        "counter": 0
      })
    })
  })
})
