export default class Post {
    
    text
    imageLink
    imageId
    privacy
    //location
    date
    uid

    constructor(text,imageLink,imageId,privacy,date,uid){
        this.text = text;
        this.imageLink = imageLink;
        this.imageId = imageId;
        this.privacy = privacy;
        //this.location = location;
        this.date = date;
        this.uid = uid;
    }
}