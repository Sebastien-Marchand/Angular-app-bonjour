import { 
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-bonjour-avec-prenom',
  templateUrl: './bonjour-avec-prenom.component.html',
  styleUrls: ['./bonjour-avec-prenom.component.css']
})
export class BonjourAvecPrenomComponent implements OnInit {
@Input()prenom:string;
  constructor() {
  //plus de valorisation de la propriété du composant
}

  ngOnInit(): void {
  }

}
