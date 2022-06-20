import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

   create_event(user_id: number, descricao: string, inicio: string, termino: string){
    return this.http.post('http://localhost:3000/events', {user_id: user_id, descricao: descricao, inicio: inicio, termino: termino});
   }
}
