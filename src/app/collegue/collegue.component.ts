import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { 
  Component, 
  OnInit, 
  OnDestroy,
  Input,
  Directive
} from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {
	modeCreation:boolean = true;
	//@Input()col:Collegue;
	col:Collegue;
	
	  constructor(private dataService: DataService) {
		}
  onClickModifier(){
	console.log("Modification du collègue");
	this.modeCreation=false;
  }
  onClickValider(){
	console.log("Modification du collègue");
	this.modeCreation=true;
  }
  onClickLinkModifier(){
	  console.log("Création d'un nouveau collègue");
  }
  ngOnInit(): void {
	this.dataService.dataObservableCollegue().subscribe(leCollegue =>{ this.col = leCollegue});
  }
  ngOnDestroy(): void{};

}
