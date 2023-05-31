import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebHttpClient } from '../webhttp/WebHttpClient';
import { VendorBankRegistrationModel } from '../models/vendor-bank-registration.model';

@Injectable({
  providedIn: 'root'
})
export class VendorBankRegistrationService {

updateData(id: number, request: VendorBankRegistrationModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: VendorBankRegistrationModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: VendorBankRegistrationModel): Observable<VendorBankRegistrationModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

saveCompanyInfo(request: VendorBankRegistrationModel): Observable<boolean> {
  return this.http.post('vendorBankDetails/create', request)
 }
}
