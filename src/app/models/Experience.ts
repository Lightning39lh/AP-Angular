

export class Experience {
    id?:number;
    company:string ;
    position:string;
    description:string;

    constructor(company:string , description: string,position:string){
        this.company=company;
        this.description=description;
        this.position=position;
    }
}