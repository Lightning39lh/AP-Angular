export class Skill {
    id?:number;
    title:string;
    img:String;
    
    constructor( title: string,img:String){
        this.title=title;
        this.img=img;
    }
}