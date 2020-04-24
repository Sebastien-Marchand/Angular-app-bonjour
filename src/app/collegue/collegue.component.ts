import { Collegue } from '../models/Collegue';
import { 
  Component, 
  OnInit, 
  Input
} from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
	@Input()col:Collegue;
  constructor() { 
  }
  onClickModifier(){
	console.log("Modification du collègue");
  }
  onClickLinkModifier(){
	  console.log("Création d'un nouveau collègue");
  }
  ngOnInit(): void {
  }

}
