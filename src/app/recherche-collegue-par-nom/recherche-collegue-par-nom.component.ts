import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricule.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules = [];

  //search(nomCollegue: string){
	search(){
		this.listeMatricules = matriculesMock;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
