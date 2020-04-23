export default class Post {
    
    text
    imageLink
    privacy
    //location
    likes
    uid
    date
    
    constructor(text,imageLink,privacy,likes,uid,date){
        this.text = text;
        this.imageLink = imageLink;
        this.privacy = privacy;
        //this.location = location;
        this.likes = likes;
        this.uid = uid;
        this.date = date;
    }
}