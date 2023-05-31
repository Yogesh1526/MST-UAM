import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { WebHttpClient } from '../../webhttp/WebHttpClient';
@Injectable({
  providedIn: 'root'
})
export class PermissionService {

updateData(id: number, request: RoleModel): Observable<number> {
    throw new Error('Method not implemented.');
}

addData(request: RoleModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: RoleModel): Observable<RoleModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}

getAllPermission() {
  return this.http.get('permission/all')
 }


saveRole(request: RoleModel): Observable<boolean> {
  return this.http.post('role/create', request)
}


}
