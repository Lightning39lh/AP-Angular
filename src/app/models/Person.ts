export class Person {
    id?: number ;
    fullName: String;
    degree: String;
    img: String;
    banner: String;
    aboutMe:String;
    constructor(full_name: String, degree: String, img:String,about_me:String, banner: String) {
         this.aboutMe=about_me;
        this.fullName = full_name;
        this.degree = degree;
        this.img = img;
        this.banner = banner;
    }
}