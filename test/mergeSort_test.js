import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('returns an array with all values from original array in order of value', function(){
    const sorted = mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
    console.log('sorted', sorted)
    expect(sorted).to.be.an('array')
    expect(sorted.length).to.equal(10)
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('returns an array with all values from original array in order of value', function(){
    const sorted = mergeSort([1,3,0,2])
    expect(sorted).to.be.an('array')
    expect(sorted.length).to.equal(4)
    expect(sorted).to.deep.equal([0,1,2,3])
  })

  it('returns array with sorted values', function(){
    expect(mergeSort({price: 100, amountGiven: 141})).to.deep.equal({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    })
  })

  it('just returns the array if it has a length of 1', function(){
    expect(mergeSort([0])).to.deep.equal([0])

    expect(mergeSort({price: 100, amountGiven: 169})).to.deep.equal([0])

    expect(mergeSort({price: 100, amountGiven: 170})).to.deep.equal({
      quarters: 2,
      dimes: 2,
      nickels: 0,
      pennies: 0,
    })
  })
})
