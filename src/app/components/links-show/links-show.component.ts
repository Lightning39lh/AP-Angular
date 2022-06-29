import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links-show',
  templateUrl: './links-show.component.html',
  styleUrls: ['./links-show.component.css']
})
export class LinksShowComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.ruta.navigate(['/login']);
  }
}
