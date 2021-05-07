import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp'

describe('Pruebs sobre <CounterApp />', () => {
  let wrapper = shallow( <CounterApp />)

  beforeEach( () => {
    
    wrapper = shallow( <CounterApp />)

  })


  test('Debe renderizar todo el componente', () => {
    expect( wrapper ).toMatchSnapshot();

  })

  test('Debe Mostrar un valor por defecto de 10', () => {
    const value = wrapper.find('h2').text().trim()
    expect( value ).toBe( '10' )

  })

  test('Debe incrementar el contador con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    let counterText = wrapper.find('h2').text().trim()
    expect( counterText ).toBe('11')
    console.log(counterText)
  })

  test('Debe disminuir el contador con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    let counterText = wrapper.find('h2').text().trim()
    console.log(counterText) 

  })
  
  test('Debe de restablecer el valor por defecto con Reset', () => {
    const wrapper = shallow( <CounterApp value = {105}/>)
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    let counterText = wrapper.find('h2').text().trim()

    expect( counterText ).toBe('105')
  })
  
  

})
