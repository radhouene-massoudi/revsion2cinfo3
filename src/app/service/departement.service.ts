import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  addDep(data: any) {
    return this.http.post(" http://localhost:3000/departement", data)
  }
  fetchDep() {
    return this.http.get("http://localhost:3000/departement")
  }
  updateDep(data: any, id: any) {
    return this.http.put(" http://localhost:3000/departement/" + id, data)
  }
  findDepById(id: any) {
    return this.http.get(" http://localhost:3000/departement/" + id)
  }
}
