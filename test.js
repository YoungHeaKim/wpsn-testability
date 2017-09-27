const assert = require('assert')

class NegativeErrror extends Error {
  constructor(message) {
    super(message)
    this.name = 'NegativeError'
  }
}

function add(x,y) {
  if( x < 0 || y < 0 ) {
    throw new NegativeErrror('음수는 허락되지 않습니다.')
  }
  return x + y
}

assert.equal(add(1, 2), 3)

assert.throws(() => {
  add(-1, 2)
}, NegativeErrror)

assert.throws(() => {
  add(1, -2)
}, NegativeErrror)

assert.throws(() => {
  add(-1, -2)
}, NegativeErrror)
