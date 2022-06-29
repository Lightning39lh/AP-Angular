import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.ruta.navigate(['/login']);
  }
}
