import '@testing-library/jest-dom'

import {getSaludo} from '../../base-pruebas/02-template-string'

describe('Prueba en 02-template-string', () => {
  test('getSaludo debe retornar hola luis', () => {
    const nombre = 'Luis'
    const saludo = getSaludo( nombre )
    
    expect( saludo ).toBe ( 'Hola ' + nombre )
  })
  test('getSaludo debe retornar hola Carlos si no recibe argumentos', () => {
    const saludo = getSaludo()
    expect( saludo ).toBe ('Hola Carlos') 
  })
})

