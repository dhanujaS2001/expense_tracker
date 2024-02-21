import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  baseUrl:string="http://127.0.0.1:8000/api/v1/transactions/"

  constructor(private http:HttpClient) {

  }

  getTransaction(){

  }
}
