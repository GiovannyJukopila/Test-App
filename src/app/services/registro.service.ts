import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistroResponse } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  public urlregistro: string = "https://jsonplaceholder.typicode.com/users";


  constructor(
    private http: HttpClient
  ) { }
  getAllRegistros() {
    return this.http.get<RegistroResponse>(this.urlregistro);
  }
}
