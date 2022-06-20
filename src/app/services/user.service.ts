import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create_register(nome: string, senha: string){
    return this.http.post('http://localhost:3000/user', {nome: nome, senha: senha});
  }
}
