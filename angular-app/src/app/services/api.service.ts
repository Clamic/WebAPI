import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client, Invoice } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly webroot="https://localhost:44371/api/";

  constructor(private http: HttpClient) {}

  getInvoices(): Observable<any[]> {
    return this.http.get<any>(this.webroot + 'invoice/get');
  }

  getInvoiceView(): Observable<any[]> {
    return this.http.get<any>(this.webroot + 'invoice/getView');
  }

  getClients(): Observable<any[]> {
    return this.http.get<any>(this.webroot + 'client/get');
  }

  insertNewInvoice(invoice: Invoice): Observable<any> {
    return this.http.put(this.webroot + 'invoice/put', invoice);
  }

  updateClientTable(client: Client): Observable<any> {
    return this.http.post(this.webroot + 'client/post', client);
  }

  addClient(client: any) {
    return this.http.put(this.webroot + 'client/put', client);
  }
}
