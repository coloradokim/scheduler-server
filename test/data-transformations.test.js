const assert = require('chai').assert;
const transformations = require('../data-transformations');

const hobby = {
  "id": 3,
  "activity": "reading",
  "minTime": 10,
  "maxTime": 60,
  "counter": 0
}

describe('Data Transformations', () => {
  describe('#increaseCounter()', () => {
    it('increases the counter', () => {
      assert.deepEqual(transformations.increaseCounter(hobby), {
        "id": 3,
        "activity": "reading",
        "minTime": 10,
        "maxTime": 60,
        "counter": 1
      })
    })
  })
})
