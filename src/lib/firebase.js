// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlE59HwBaOOnp6jJ475Wm-j4t9izg836c",
    authDomain: "tallerfixter-f7f34.firebaseapp.com",
    databaseURL: "https://tallerfixter-f7f34.firebaseio.com",
    projectId: "tallerfixter-f7f34",
    storageBucket: "tallerfixter-f7f34.appspot.com",
    messagingSenderId: "904827933328",
    appId: "1:904827933328:web:88b68abe2f11a23914be15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()
let usersRef = db.collection('users')

export default firebase

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => {
            saveUser(snap.user)
            return snap.user
        })
}

function saveUser(user) {
    let { displayName, uid, photoURL, email } = user
    let u = {
        displayName,
        uid,
        photoURL,
        email
    }
    usersRef.doc(user.uid).set(u)
    // local
    localStorage.user = JSON.stringify(u)
}