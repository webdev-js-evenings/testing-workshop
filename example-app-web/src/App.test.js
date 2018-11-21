import { shallow } from 'enzyme'
import chai, { expect } from 'chai'

import chaiImmutable from 'chai-immutable'
import chaiEnzyme from 'chai-enzyme'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

chai.use(chaiImmutable)
chai.use(chaiEnzyme())

beforeEach(() => {

})

it('renders header', () => {
  const div = document.createElement('div');

  const wrapper = shallow(<App />)
  
  expect(wrapper).to.have.descendants('header')
});


it('renders text', () => {
  const div = document.createElement('div');

  const wrapper = shallow(<App />)

  expect(wrapper).to.contain.text('Learn React')
});
