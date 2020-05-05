import { login, signup} from './controller/firebase-controller.js';

// Login with email and password
export function logIn() {
  const email = document.getElementById('emailLogIn').value;
  const password = document.getElementById('passwordLogIn').value;
  return login(email, password);
}

// Sign up with email and password
export function signUp() {
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  signup(email, password);
}
