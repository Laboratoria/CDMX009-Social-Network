export function saveFirestore(name, img, data, link) {
  let date = new Date();
  date += Date.now();
  const date1 = date.slice(0, 25);
  const coment = document.querySelector('#text-box');
  console.log(`post  ${coment.value}`);
  //* ******************add comments in firestore*********************************
  data.collection('publications').add({
    Name: name,
    Photo: img,
    Date: date1,
    Comments: coment.value,
    Likes: '',
    Image: link || '',
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      console.log(coment.value);
      const cleanBox = document.getElementById('text-box');
      cleanBox.value = '';
      console.log(cleanBox);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}
