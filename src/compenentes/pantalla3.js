let root = document.querySelector('#root');
database.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
    });
});
