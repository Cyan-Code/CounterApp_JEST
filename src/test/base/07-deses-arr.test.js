import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en desestructuración', () => {
  
  test('Debe retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo(); //[]
    
    // si nuestro no lo conocemos
    expect( typeof letras ).toEqual( 'string' )
    expect( typeof numeros ).toBe( 'number' )
    
  })  

})
