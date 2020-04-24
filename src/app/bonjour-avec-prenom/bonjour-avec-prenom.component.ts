import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour-avec-prenom',
  templateUrl: './bonjour-avec-prenom.component.html',
  styleUrls: ['./bonjour-avec-prenom.component.css']
})
export class BonjourAvecPrenomComponent implements OnInit {
	prenom:string;
  constructor() {
	  this.prenom = 'Philippe';
	  }

  ngOnInit(): void {
  }

}
