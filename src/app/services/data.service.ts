import { Injectable } from '@angular/core';
import {listeMatricule} from '../mock/matricule.mock';
import {Collegue} from '../models/Collegue';
import {collegueMock} from '../mock/collegues.mock';
import{environment}from'../../environments/environment';
import{HttpClient}from'@angular/common/http';
import{Observable, Subject, interval, from}from'rxjs'
import { tap, map, filter } from 'rxjs/operators';
import { HttpHeaders } from'@angular/common/http';

// Options de la requête HTTP
// ici le corps de la requête sera du JSON
const httpOptions = {
	headers: new HttpHeaders({
	  'Content-Type': 'application/json'
	})
  };

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private observableCollegue = new Subject<Collegue>();
	
  constructor(private http: HttpClient) { }
  
	dataObservableCollegue(): Observable<Collegue> {
		return this.observableCollegue.asObservable();
  }
  
	rechercherParNom(nom: string): Observable<String[]> {
		return this.http.get<String[]>(`https://digicapi.herokuapp.com/collegues?nom=${nom}`);
	}
  recupererCollegueCourant(matricule: string): Observable<Collegue>{
    return this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/${matricule}`)
	.pipe(
		tap(collegue => this.observableCollegue.next(collegue))
	);
  }
  crerCollegue(nom:string, prenom:string, email:string, dateDeNaissance:Date, photoUrl:string)
  {
	  return this.http
	  .post(
		'https://digicapi.herokuapp.com/collegues',
		{
			nom,
			prenom,
			email,
			dateDeNaissance,
			photoUrl
		},
		httpOptions
	  )
  }
  
}
