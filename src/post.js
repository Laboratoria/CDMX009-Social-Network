function submitpost(tags, privacy, userId, post_text) {
    
     firebase.database().ref("users/"+firebase.auth().currentUser.uid).once("value", function(snapshot){
         const newPostKey = firebase.database().ref().child("users/"+userId+"/post").push().key;
     
         const updates = {};
         updates["users/"+userId+"/posts/post" + newPostKey] = {
             "tags": tags,
             "author": snapshot.val().profile.username,
             "content": post_text,
             "authorId": firebase.auth().currentUser.uid,
             "authorPic": snapshot.val().profile.profilePic,
             "especialidad": snapshot.val().profile.especialidad
 
         }
         const updates2 = {};
         updates2["posts/post" + newPostKey] ={
             "tags": tags,
             "author": snapshot.val().profile.username,
             "content": post_text,
             "authorId": firebase.auth().currentUser.uid,
             "authorPic": snapshot.val().profile.profilePic,
             "especialidad": snapshot.val().profile.especialidad
 
         }
     
         firebase.database().ref().update(updates);
         if (privacy === "public") {
             firebase.database().ref().update(updates2);
         }
         window.socialNetwork.printPosts(window.socialNetwork.printPostsDOM)   
 
     })
 }

 
 
