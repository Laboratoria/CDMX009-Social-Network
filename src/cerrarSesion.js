export const closeSesion = () => {
  firebase.auth().signOut()
  .then(() => {
    console.log('Cerrando sesión');
   }).catch(function(error){
      console.log(error);
   })
}