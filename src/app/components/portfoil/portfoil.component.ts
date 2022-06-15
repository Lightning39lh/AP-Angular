import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfoil',
  templateUrl: './portfoil.component.html',
  styleUrls: ['./portfoil.component.css']
})
export class PortfoilComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
  }

}
