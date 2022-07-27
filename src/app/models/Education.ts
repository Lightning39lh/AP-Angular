

export class Education {
    id?:number;
    title:string ;
    description:string;
    place: string

    
    


    constructor(title:string , description: string, place:string){
        this.title=title;
        this.description=description;
        this.place=place;
    }
}