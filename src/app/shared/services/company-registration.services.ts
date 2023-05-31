import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CompanyRegistrationModel } from '../models/company-registration.model';
import { WebHttpClient } from '../webhttp/WebHttpClient';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegistrationService {

updateData(id: number, request: CompanyRegistrationModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: CompanyRegistrationModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: CompanyRegistrationModel): Observable<CompanyRegistrationModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveCompanyInfo(request: CompanyRegistrationModel): Observable<boolean> {
  return this.http.post('customer/create', request)
 }
}
