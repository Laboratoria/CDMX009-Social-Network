//* ****************login with socialmedia**************************
export function actionGoogle() {
  const btnGoogle = document.getElementById('loginGoogle');
  btnGoogle.addEventListener('click', () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle);
  });
}

export function actionFacebook() {
  const btnFacebook = document.getElementById('loginFacebook');
  btnFacebook.addEventListener('click', () => {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook);
  });
}
