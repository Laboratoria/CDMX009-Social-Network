import { registerAuthentication } from '../src/signin';

global.firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => new Promise((resolve,reject) => {
      resolve(true)      
    }))
  }))
}

// test('Vamos a validar el registro', () => {
//   let email = "gabyalvarzb@gmail.com"
//   let password = "1234"

//   expect(auth.emailLogin(email, password)).tobe('no cumple con seis caracteres');
//   expect(auth.emailLogin('', password)).tobe('No ingreso email o password');
// });

// test('emailLogin se ejecuta correctamente', () => {
//   let email = "gabyalvarzb@gmail.com"
//   let password = "123456"

//   auth.emailLogin(email, password).then( value => {
//     expect(value).tobe(true);
//   });
// });

test("Iniciar session con emil y password", async () => {
  let usuario = new User("Pedro","Godinez","pedro@gmail.com","123");

  const result = await registerAuthentication(usuario)

  expect(result).not.toBeNull();
  // expect(firebase.auth).toHaveBeenCalled()
  // expect(getRedirectResult).toHaveBeenCalled()
})


/*describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
});

describe('probando funciones para registrar un nuevo usuario', () => {
  it('debería ser una función', () => {
      expect(typeof renderSignin).toBe('function');
  });

  it('debería ser una funcion', () => {
      expect(typeof send).toBe('function');
  });

  it('deberia de regresar "Charmander" al ingresar charmander en el cuadro de busqueda', () => {
      expect(pokemones.filterByName("charmander")).toBeTruthy();
  });

  it('deberia de regresar "Voltorb" al ingresar el numero 100 en el cuadro de busqueda', () => {
      expect(pokemones.filterByName("100")).toBeTruthy();
  });*/