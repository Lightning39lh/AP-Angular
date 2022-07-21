

export class Project {
    id?:number;
    title:string ;
    description:string;
    link:string;
    My_User_Id:number;
    
    


    constructor(title:string , description: string,link:string){
        this.title=title;
        this.description=description;
        this.link=link;
    }
}