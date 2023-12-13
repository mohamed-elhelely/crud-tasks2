import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../context/DTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  logIn(model:Login){
    return this.http.post("https://crud-5q39.onrender.com/auth/login",model)
  }
}
