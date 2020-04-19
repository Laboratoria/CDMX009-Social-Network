firebase.initializeApp( {
  apiKey: "AIzaSyBqImEvm_hfsvsj2vN8KWBn6Ewr2zFb9CQ",
  authDomain: "social-network-d33e4.firebaseapp.com",
  databaseURL: "https://social-network-d33e4.firebaseio.com",
  projectId: "social-network-d33e4",
  storageBucket: "social-network-d33e4.appspot.com",
  messagingSenderId: "957477248623",
  appId: "1:957477248623:web:77fed7501ea9a56198b79a",
  measurementId: "G-M3SME61YJ3"
});



$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data('whatever');
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
  
})


