import { Injectable } from '@angular/core';
import {listeMatricule} from '../mock/matricule.mock';
import {Collegue} from '../models/Collegue';
import {collegueMock} from '../mock/collegues.mock';
import{environment}from'../../environments/environment';
import{HttpClient}from'@angular/common/http';
import{Observable, Subject, interval}from'rxjs'
import { tap, map, filter } from 'rxjs/operators';

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
  
}
