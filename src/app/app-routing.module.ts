import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepComponent } from './adddep/adddep.component';
import { ListdepComponent } from './listdep/listdep.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { UpdatedepComponent } from './updatedep/updatedep.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'adddep',component:AdddepComponent},
  {path:'list',component:ListdepComponent},
  {path:'update/:id',component:UpdatedepComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
