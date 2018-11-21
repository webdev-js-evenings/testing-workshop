import Logic from './Logic';
import chai, { expect } from 'chai'

import chaiImmutable from 'chai-immutable'

import { List } from 'immutable'

chai.use(chaiImmutable)

describe('summing', () => {
  it('sums 0 + 1 properly in a way that is specified', () => {
    const sum = Logic.sum(0, 1)
    expect(sum).to.equal(0)
  });

  it('sums properly', () => {
    expect(Logic.sum(1,2)).to.equal(3)
    expect(Logic.sum(1,3)).to.equal(4)
  });

  it('sums 1 + -1', () => {
    const sum = Logic.sum(1, -1)

    expect(sum).to.equal(0)
  });
});

it('should add element to provided list', () => {
  const iLogic = new Logic()
  iLogic.flag = true

  const testList = List.of(1, 2, 3)
  const newList = Logic.addElement(testList, 5)

  expect(newList.size).toBe(4)
  expect(newList.last()).toBe(5)

  // expect(newList).to.have.text(4)
})

