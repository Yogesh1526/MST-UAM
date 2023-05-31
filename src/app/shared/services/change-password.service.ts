import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebHttpClient } from '../webhttp/WebHttpClient';
import { ChangePasswordModel } from '../models/change-password.model';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

updateData(id: number, request: ChangePasswordModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: ChangePasswordModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: ChangePasswordModel): Observable<ChangePasswordModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveDetails(request: ChangePasswordModel): Observable<boolean> {
  return this.http.post(' security/changepassword', request)
 }
}
