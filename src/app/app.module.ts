import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdddepComponent } from './adddep/adddep.component';
import { ListdepComponent } from './listdep/listdep.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { UpdatedepComponent } from './updatedep/updatedep.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddepComponent,
    ListdepComponent,
    NotfoundComponent,
    LoginComponent,
    UpdatedepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
