

describe('Pruebas para el archivo demo.test.js', () => {
  test( 'Deben de ser iguales los strings', () => {
    // 1. Inicialización
    const message = 'hello world'
  
    // 2. Estímulo
    const message2 = 'hello world'
  
    // 3. Observar comportamiento
    expect (message).toBe(message2)
    
  })  
});
