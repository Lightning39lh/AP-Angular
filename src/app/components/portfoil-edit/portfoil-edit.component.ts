import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfoil-edit',
  templateUrl: './portfoil-edit.component.html',
  styleUrls: ['./portfoil-edit.component.css']
})
export class PortfoilComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
  }

}
