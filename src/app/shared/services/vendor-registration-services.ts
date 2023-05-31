import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebHttpClient } from '../webhttp/WebHttpClient';
import { VendorRegistrationModel } from '../models/vendor-registration.model';

@Injectable({
  providedIn: 'root'
})
export class VendorRegistrationService {

updateData(id: number, request: VendorRegistrationModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: VendorRegistrationModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: VendorRegistrationModel): Observable<VendorRegistrationModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveCompanyInfo(request: VendorRegistrationModel): Observable<boolean> {
  return this.http.post('vendorDetails/create', request)
 }
}
