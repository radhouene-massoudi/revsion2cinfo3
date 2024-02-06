import { Component } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatedep',
  templateUrl: './updatedep.component.html',
  styleUrls: ['./updatedep.component.css']
})
export class UpdatedepComponent {
  dep: any;
  constructor(
    private s: DepartementService,
    private ac: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.s.findDepById(this.ac.snapshot.params['id']).subscribe(
      (d) => {
        this.dep = d;
        this.dep.max_salaire = 1000;
        this.s.updateDep(this.dep, this.ac.snapshot.params['id']).subscribe(
          () => {
            alert('updated')
          }
        )
      }
    )

  }



}
