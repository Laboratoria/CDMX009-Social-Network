export default class User {
    
    name
    lastName
    email
    password
    description
    date
    photo
    uid
    constructor(name,lastName,email,password,description,date,photo,uid){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.description = description; 
        this.date = date; 
        this.photo = photo; 
        this.uid = uid;
    }
}
