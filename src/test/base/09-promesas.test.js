import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"
import heroes from "../../data/heroes"

describe('Pruebas sobre promesas', () => {
  
  test('getHeroeByIdAsync debe retornar un Héroe async', (done) => {
    
    const id = 1
    getHeroeByIdAsync( id )
    //Heroe existente
      .then( heroe => {
        expect( heroe ).toBe (heroes[0])
        done()
      })

  })
  test('Debe retornar un error si el Héroe por id no existe', (done) => {
    
    const id = 10;
    getHeroeByIdAsync( id )
    //Heroe existente
      .catch( err => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect( err ).toBe ('No se pudo encontrar el héroe')
        done()
      })

  })
  
})
