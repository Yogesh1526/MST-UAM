import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebHttpClient } from '../webhttp/WebHttpClient';
import { CompanyEmailModel } from '../models/company-email.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyEmailService {

updateData(id: number, request: CompanyEmailModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: CompanyEmailModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: CompanyEmailModel): Observable<CompanyEmailModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveEmailDetails(request: CompanyEmailModel): Observable<boolean> {
  return this.http.post('email/create', request)
 }
}
