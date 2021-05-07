import { getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-functiones', () => {
  test('getUser Debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();
    
    expect( user ).toEqual( userTest )
  })
  test('El usuario activo debe retornar un objeto', () => {
    const nombre = 'capo'
    const user = getUsuarioActivo(nombre)

    const userTest = {
      uid: 'ABC567',
      username: nombre
    }

    expect ( user ).toEqual ( userTest )
  })
})
