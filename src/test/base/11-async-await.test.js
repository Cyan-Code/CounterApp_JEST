import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas con Async-Await y Fetch', () => {
    test('Debe de retornar el url de la imágen', async() => {
      const url = await getImagen();
      expect( typeof url ).toBe('string')
    })
    
})
