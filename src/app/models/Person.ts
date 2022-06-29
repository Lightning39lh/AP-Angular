export class Person {
    id?: number ;
    fullName: String;
    degree: String;
    img: String;
    aboutMe:String;
    constructor(fullName: String, degree: String, img:String,aboutMe:String) {
         this.aboutMe=aboutMe;
        this.fullName = fullName;
        this.degree = degree;
        this.img = img;
    }
}