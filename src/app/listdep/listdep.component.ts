import { Component } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { Departement } from '../model/departement';

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css']
})
export class ListdepComponent {
  search=0;
  nb=0;
  dep:any;
constructor(private s:DepartementService){
}
ngOnInit(){
  this.s.fetchDep().subscribe(
    (result)=>{
      this.dep=result
      
     }
  );
}
showInfo(){
  this.s.fetchDep().subscribe(
    (result)=>{
      this.dep=result
  
    }
  );
}
nbEmployer(){
  for(let i=0;i<this.dep.length;i++){
       this.nb=this.nb+ this.dep[i].nb_employer
  }
}
}
