export default class User {
    
    /*
    name
    lastName
    email
    photo
    password
    description
    date
    uid*/    

    constructor(name,lastName,email,password,photo,description,date,uid){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.description = description;
        this.date = date;
        this.uid = uid;
    }
}