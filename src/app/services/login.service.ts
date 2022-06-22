import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


create_session(nome: string, senha: string) {

  return this.http.post('http://localhost:3000/login', {nome: nome, senha: senha})

}

logout() {
  localStorage.removeItem('JWT');
}
}
