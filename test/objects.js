var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}

describe('objects', function(){

  it('object', function(){
    assert.equal(true , is.object(fn))
    assert.equal(true , is.object(new Date))
    assert.equal(false, is.object(undefined))
    assert.equal(false, is.object(NaN))
    assert.equal(false, is.object(null))
    assert.equal(false, is.object(true))
    assert.equal(false, is.object(false))
    assert.equal(true , is.object(new Object()))
    assert.equal(true , is.object({}))
    assert.equal(true , is.object({foo:'bar'}))
    assert.equal(true , is.object(new Array()))
    assert.equal(true , is.object([]))
    assert.equal(false, is.object(""))
    assert.equal(false, is.object("   "))
    assert.equal(false, is.object("asdf"))
    assert.equal(false, is.object(1.23))
    assert.equal(false, is.object(-42))
    assert.equal(false, is.object(-1))
    assert.equal(false, is.object(0))
    assert.equal(false, is.object(666)) // :metal:
  })

  it('emptyObject', function(){
    assert.equal(true , is.emptyObject(fn))
    assert.equal(true , is.emptyObject(new Date))
    assert.equal(true , is.emptyObject(undefined))
    assert.equal(true , is.emptyObject(NaN))
    assert.equal(true , is.emptyObject(null))
    assert.equal(true , is.emptyObject(true))
    assert.equal(true , is.emptyObject(false))
    assert.equal(true , is.emptyObject(new Object()))
    assert.equal(true , is.emptyObject({}))
    assert.equal(false, is.emptyObject({foo:'bar'}))
    assert.equal(true , is.emptyObject(new Array()))
    assert.equal(true , is.emptyObject([]))
    assert.equal(true , is.emptyObject(""))
    assert.equal(false, is.emptyObject("   "))
    assert.equal(false, is.emptyObject("asdf"))
    assert.equal(true , is.emptyObject(1.23))
    assert.equal(true , is.emptyObject(-42))
    assert.equal(true , is.emptyObject(-1))
    assert.equal(true , is.emptyObject(0))
    assert.equal(true , is.emptyObject(666)) // :metal:
  })

  it('plainObject', function(){
    assert.equal(false, is.plainObject(fn))
    assert.equal(false, is.plainObject(new Date))
    assert.equal(false, is.plainObject(undefined))
    assert.equal(false, is.plainObject(NaN))
    assert.equal(false, is.plainObject(null))
    assert.equal(false, is.plainObject(true))
    assert.equal(false, is.plainObject(false))
    assert.equal(true , is.plainObject(new Object()))
    assert.equal(true , is.plainObject({}))
    assert.equal(true , is.plainObject({foo:'bar'}))
    assert.equal(false, is.plainObject(new Array()))
    assert.equal(false, is.plainObject([]))
    assert.equal(false, is.plainObject(""))
    assert.equal(false, is.plainObject("   "))
    assert.equal(false, is.plainObject("asdf"))
    assert.equal(false, is.plainObject(1.23))
    assert.equal(false, is.plainObject(-42))
    assert.equal(false, is.plainObject(-1))
    assert.equal(false, is.plainObject(0))
    assert.equal(false, is.plainObject(666)) // :metal:
  })

})
