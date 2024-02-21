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
    return this.http.get(this.baseUrl)
  }
  
  createTransaction(data:any){
    return this.http.post(this.baseUrl,data)
  }

  retrieveTransactionDetails(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updateTransaction(data:any,id:number){
    return this.http.put(`${this.baseUrl}/${id}`,data)
  }

  removeTransaction(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  
}
