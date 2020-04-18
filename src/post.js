export default class Post {
    
    text
    imageLink
    date
    privacy
    location
    likes
    uid    

    constructor(text,imageLink,date,privacy,location,likes,uid){
        this.text = text;
        this.imageLink = imageLink;
        this.date = date;
        this.privacy = privacy;
        this.location = location;
        this.likes = likes;
        this.uid = uid;
    }
}