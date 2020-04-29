//* *******************user singout*****************************
export function signOut() {
  document.getElementById('firstPage').style.display = 'block';
  document.getElementById('allTheSite').style.display = 'none';
  firebase.auth().signOut()
    .then(() => {
      console.log('Out');
    })
    .catch((error) => {
      console.log(error);
    });
}
