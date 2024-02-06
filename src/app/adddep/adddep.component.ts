import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../service/departement.service';
import { Departement } from '../model/departement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddep',
  templateUrl: './adddep.component.html',
  styleUrls: ['./adddep.component.css']
})
export class AdddepComponent {
  constructor(
    private s:DepartementService,
    private router:Router
    ){

  }
fg=new FormGroup({
  matricule:new FormControl('',[Validators.minLength(3),Validators.pattern('[A-Z]^.{8,}$')]),
  domaine:new FormControl(''),
  nb_employer:new FormControl(''),
  max_salaire:new FormControl(''),
})
save(){
  
  this.s.addDep(this.fg.value).subscribe(
    ()=>{
      //alert('added')
      this.router.navigate(['list'])
    }
  )
}
}
