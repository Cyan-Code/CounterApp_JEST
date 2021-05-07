import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"
import heroes from '../../data/heroes'

describe('Pruebas en funciones de heroes', () => {
  
  test('Debe de retornar un heroe por id', () => {
    
    const id = 1
    const heroe = getHeroeById( id )

    const heroeData = heroes.find ( h => h.id === id)

    expect (heroe).toEqual( heroeData )

  })
  test('Debe de retornar udefined si un heroe no existe', () => {
    
    const id = 10
    const heroe = getHeroeById( id )
    expect (heroe).toEqual( undefined )
  })
  test('Debe retornar un arreglo con los heroes de DC', () => {
    
    const owner = 'DC'
    const heroe = getHeroesByOwner( owner )
    const heroeOwnerTest = heroe.filter( i => i.owner === 'DC' )
    expect( heroe ).toEqual(heroeOwnerTest)
  })
  test('Debe retornar un arreglo con tamaño de 2 (Heroes Marvel)', () => {

    const owner = 'Marvel'
    const heroe = getHeroesByOwner( owner ).length
    const number = 2
    expect (heroe).toBe( number )
  })
  
  
  
})
