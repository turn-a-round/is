var assert = require('assert')
var is = require('../lib/is')

var fn = function(){}

describe('casting methods', function(){

  it('toInteger', function(){
    assert.equal(null, is.toInteger(fn))
    assert.equal(null, is.toInteger(new Date()))
    assert.equal(null, is.toInteger(undefined))
    assert.equal(null, is.toInteger(NaN))
    assert.equal(null, is.toInteger(null))
    assert.equal(null, is.toInteger(true))
    assert.equal(null, is.toInteger(false))
    assert.equal(null, is.toInteger({}))
    assert.equal(null, is.toInteger([]))
    assert.equal(null, is.toInteger(""))
    assert.equal(null, is.toInteger("   "))
    assert.equal(null, is.toInteger("asdf"))
    assert.equal(1,    is.toInteger("1.23"))
    assert.equal(-42,  is.toInteger("-42"))
    assert.equal(-1,   is.toInteger("-1"))
    assert.equal(0,    is.toInteger("0"))
    assert.equal(666,  is.toInteger("666"))
    assert.equal(1,    is.toInteger(1.23))
    assert.equal(-42,  is.toInteger(-42))
    assert.equal(-1,   is.toInteger(-1))
    assert.equal(0,    is.toInteger(0))
    assert.equal(666,  is.toInteger(666))
  })

  it('toInt', function(){
    assert.equal(null, is.toInt(fn))
    assert.equal(null, is.toInt(new Date()))
    assert.equal(null, is.toInt(undefined))
    assert.equal(null, is.toInt(NaN))
    assert.equal(null, is.toInt(null))
    assert.equal(null, is.toInt(true))
    assert.equal(null, is.toInt(false))
    assert.equal(null, is.toInt({}))
    assert.equal(null, is.toInt([]))
    assert.equal(null, is.toInt(""))
    assert.equal(null, is.toInt("   "))
    assert.equal(null, is.toInt("asdf"))
    assert.equal(1,    is.toInt("1.23"))
    assert.equal(-42,  is.toInt("-42"))
    assert.equal(-1,   is.toInt("-1"))
    assert.equal(0,    is.toInt("0"))
    assert.equal(666,  is.toInt("666"))
    assert.equal(1,    is.toInt(1.23))
    assert.equal(-42,  is.toInt(-42))
    assert.equal(-1,   is.toInt(-1))
    assert.equal(0,    is.toInt(0))
    assert.equal(666,  is.toInt(666))
  })

  it('toNumber', function(){
    assert.equal(null, is.toNumber(fn))
    assert.equal(null, is.toNumber(new Date()))
    assert.equal(null, is.toNumber(undefined))
    assert.equal(null, is.toNumber(NaN))
    assert.equal(null, is.toNumber(null))
    assert.equal(null, is.toNumber(true))
    assert.equal(null, is.toNumber(false))
    assert.equal(null, is.toNumber({}))
    assert.equal(null, is.toNumber([]))
    assert.equal(null, is.toNumber(""))
    assert.equal(null, is.toNumber("   "))
    assert.equal(null, is.toNumber("asdf"))
    assert.equal(1.23, is.toNumber("1.23"))
    assert.equal(-42,  is.toNumber("-42"))
    assert.equal(-1,   is.toNumber("-1"))
    assert.equal(0,    is.toNumber("0"))
    assert.equal(666,  is.toNumber("666"))
    assert.equal(1.23, is.toNumber(1.23))
    assert.equal(-42,  is.toNumber(-42))
    assert.equal(-1,   is.toNumber(-1))
    assert.equal(0,    is.toNumber(0))
    assert.equal(666,  is.toNumber(666))
  })

  it('toNum', function(){
    assert.equal(null, is.toNum(fn))
    assert.equal(null, is.toNum(new Date()))
    assert.equal(null, is.toNum(undefined))
    assert.equal(null, is.toNum(NaN))
    assert.equal(null, is.toNum(null))
    assert.equal(null, is.toNum(true))
    assert.equal(null, is.toNum(false))
    assert.equal(null, is.toNum({}))
    assert.equal(null, is.toNum([]))
    assert.equal(null, is.toNum(""))
    assert.equal(null, is.toNum("   "))
    assert.equal(null, is.toNum("asdf"))
    assert.equal(1.23, is.toNum("1.23"))
    assert.equal(-42,  is.toNum("-42"))
    assert.equal(-1,   is.toNum("-1"))
    assert.equal(0,    is.toNum("0"))
    assert.equal(666,  is.toNum("666"))
    assert.equal(1.23, is.toNum(1.23))
    assert.equal(-42,  is.toNum(-42))
    assert.equal(-1,   is.toNum(-1))
    assert.equal(0,    is.toNum(0))
    assert.equal(666,  is.toNum(666))
  })

  it('toPositiveInteger', function(){
    assert.equal(false, is.aPositiveInteger(fn))
    assert.equal(false, is.aPositiveInteger(new Date()))
    assert.equal(false, is.aPositiveInteger(undefined))
    assert.equal(false, is.aPositiveInteger(NaN))
    assert.equal(false, is.aPositiveInteger(null))
    assert.equal(false, is.aPositiveInteger(true))
    assert.equal(false, is.aPositiveInteger(false))
    assert.equal(false, is.aPositiveInteger({}))
    assert.equal(false, is.aPositiveInteger([]))
    assert.equal(false, is.aPositiveInteger(""))
    assert.equal(false, is.aPositiveInteger("  "))
    assert.equal(false, is.aPositiveInteger("asdf"))
    assert.equal(false, is.aPositiveInteger("1.23"))
    assert.equal(false, is.aPositiveInteger("-42"))
    assert.equal(false, is.aPositiveInteger("-1"))
    assert.equal(false, is.aPositiveInteger("0"))
    assert.equal(true,  is.aPositiveInteger("666"))
    assert.equal(false, is.aPositiveInteger(1.23))
    assert.equal(false, is.aPositiveInteger(-42))
    assert.equal(false, is.aPositiveInteger(-1))
    assert.equal(false, is.aPositiveInteger(0))
    assert.equal(true,  is.aPositiveInteger(666))
  })

  it('toNegativeInteger', function(){
    assert.equal(false, is.aNegativeInteger(fn))
    assert.equal(false, is.aNegativeInteger(new Date()))
    assert.equal(false, is.aNegativeInteger(undefined))
    assert.equal(false, is.aNegativeInteger(NaN))
    assert.equal(false, is.aNegativeInteger(null))
    assert.equal(false, is.aNegativeInteger(true))
    assert.equal(false, is.aNegativeInteger(false))
    assert.equal(false, is.aNegativeInteger({}))
    assert.equal(false, is.aNegativeInteger([]))
    assert.equal(false, is.aNegativeInteger(""))
    assert.equal(false, is.aNegativeInteger("  "))
    assert.equal(false, is.aNegativeInteger("asdf"))
    assert.equal(false, is.aNegativeInteger("1.23"))
    assert.equal(true,  is.aNegativeInteger("-42"))
    assert.equal(true,  is.aNegativeInteger("-1"))
    assert.equal(false, is.aNegativeInteger("0"))
    assert.equal(false, is.aNegativeInteger("666"))
    assert.equal(false, is.aNegativeInteger(1.23))
    assert.equal(true,  is.aNegativeInteger(-42))
    assert.equal(true,  is.aNegativeInteger(-1))
    assert.equal(false, is.aNegativeInteger(0))
    assert.equal(false, is.aNegativeInteger(666))
  })

  it('toPosInt plus attr', function(){
    assert.equal(false, is.aPosInt(fn, 2))
    assert.equal(false, is.aPosInt(new Date(), 2))
    assert.equal(false, is.aPosInt(undefined, 2))
    assert.equal(false, is.aPosInt(NaN, 2))
    assert.equal(false, is.aPosInt(null, 2))
    assert.equal(false, is.aPosInt(true, 2))
    assert.equal(false, is.aPosInt(false, 2))
    assert.equal(false, is.aPosInt({}, 2))
    assert.equal(false, is.aPosInt([], 2))
    assert.equal(false, is.aPosInt("", 2))
    assert.equal(false, is.aPosInt("  ", 2))
    assert.equal(false, is.aPosInt("asdf", 2))
    assert.equal(false, is.aPosInt("1.23", 2))
    assert.equal(false, is.aPosInt("-42", 2))
    assert.equal(false, is.aPosInt("-1", 2))
    assert.equal(false, is.aPosInt("0", 2))
    assert.equal(true,  is.aPosInt("666", 2))
    assert.equal(false, is.aPosInt(1.23, 2))
    assert.equal(false, is.aPosInt(-42, 2))
    assert.equal(false, is.aPosInt(-1, 2))
    assert.equal(false, is.aPosInt(0, 2))
    assert.equal(true,  is.aPosInt(666, 2))
  })

  it('toNegInt plus attr', function(){
    assert.equal(false, is.aNegInt(fn, -2))
    assert.equal(false, is.aNegInt(new Date(), -2))
    assert.equal(false, is.aNegInt(undefined, -2))
    assert.equal(false, is.aNegInt(NaN, -2))
    assert.equal(false, is.aNegInt(null, -2))
    assert.equal(false, is.aNegInt(true, -2))
    assert.equal(false, is.aNegInt(false, -2))
    assert.equal(false, is.aNegInt({}, -2))
    assert.equal(false, is.aNegInt([], -2))
    assert.equal(false, is.aNegInt("", -2))
    assert.equal(false, is.aNegInt("  ", -2))
    assert.equal(false, is.aNegInt("asdf", -2))
    assert.equal(false, is.aNegInt("1.23", -2))
    assert.equal(true,  is.aNegInt("-42", -2))
    assert.equal(false, is.aNegInt("-1", -2))
    assert.equal(false, is.aNegInt("0", -2))
    assert.equal(false, is.aNegInt("666", -2))
    assert.equal(false, is.aNegInt(1.23, -2))
    assert.equal(true,  is.aNegInt(-42, -2))
    assert.equal(false, is.aNegInt(-1, -2))
    assert.equal(false, is.aNegInt(0, -2))
    assert.equal(false, is.aNegInt(666, -2))
  })

})