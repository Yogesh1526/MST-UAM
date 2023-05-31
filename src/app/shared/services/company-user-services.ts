import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebHttpClient } from '../webhttp/WebHttpClient';
import { CompanyUserModel } from '../models/company-user.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyUserService {

updateData(id: number, request: CompanyUserModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: CompanyUserModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: CompanyUserModel): Observable<CompanyUserModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveUserInfo(request: CompanyUserModel): Observable<boolean> {
  return this.http.post('companyUser/create', request)
 }
}
