import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Link } from 'src/app/models/Link';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-links-show',
  templateUrl: './links-show.component.html',
  styleUrls: ['./links-show.component.css']
})
export class LinksShowComponent implements OnInit {
  username:string;
  link: Link = new Link ("","");

 

  constructor(private linkService: LinkService,private route: ActivatedRoute, private ruta:Router) { }

  ngOnInit(): void {
  this.username = this.route.snapshot.paramMap.get("username")
   this.getAllLinks();
  }
  logout(){
    this.ruta.navigate(['/login']);
  }
  // connect angular with rest api 
  async getAllLinks(): Promise<void> {
    (await this.linkService.getAllLinksPublic(this.username)).subscribe(data => {
      this.link = data;
     })
    }


}
