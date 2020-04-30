//* *******************user singout*****************************
export function signOut() {
  firebase.auth().signOut()
    .then(() => {
      console.log('Out');
    })
    .catch((error) => {
      console.log(error);
    });
}
