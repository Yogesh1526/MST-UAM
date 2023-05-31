import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CompanyAddressModel } from '../models/company-address.model';
import { WebHttpClient } from '../webhttp/WebHttpClient';

@Injectable({
  providedIn: 'root'
})
export class CompanyAddressService {

updateData(id: number, request: CompanyAddressModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: CompanyAddressModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: CompanyAddressModel): Observable<CompanyAddressModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveCompanyAddress(request: CompanyAddressModel): Observable<boolean> {
  return this.http.post('address/create', request)
 }
}
