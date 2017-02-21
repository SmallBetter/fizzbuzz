import { describe } from 'mocha'
import { expect } from 'chai'
import index from '../src/index'

describe('index', () => {
  describe('#fizzbuzz(n)', () => {
    it('should be 1', () => {
      expect(index.fizzbuzz(1)).to.be.equal(1)
    })
    it('should be fizz', () => {
      expect(index.fizzbuzz(3)).to.be.equal('fizz')
    })
    it('should be buzz', () => {
      expect(index.fizzbuzz(5)).to.be.equal('buzz')
    })
    it('should be 7', () => {
      expect(index.fizzbuzz(7)).to.be.equal(7)
    })
    it('should be fizz', () => {
      expect(index.fizzbuzz(9)).to.be.equal('fizz')
    })
    it('should be buzz', () => {
      expect(index.fizzbuzz(10)).to.be.equal('buzz')
    })
    it('should be 11', () => {
      expect(index.fizzbuzz(11)).to.be.equal(11)
    })
    it('should be fizz', () => {
      expect(index.fizzbuzz(12)).to.be.equal('fizz')
    })
    it('should be 13', () => {
      expect(index.fizzbuzz(13)).to.be.equal(13)
    })
    it('should be fizzbuzz', () => {
      expect(index.fizzbuzz(15)).to.be.equal('fizzbuzz')
    })
    it('should be fizz', () => {
      expect(index.fizzbuzz(303)).to.be.equal('fizz')
    })
    it('should be buzz', () => {
      expect(index.fizzbuzz(590)).to.be.equal('buzz')
    })
    it('should be fizz', () => {
      expect(index.fizzbuzz(123)).to.be.equal('fizz')
    })
    it('should be 1001', () => {
      expect(index.fizzbuzz(1001)).to.be.equal(1001)
    })
  })
})
