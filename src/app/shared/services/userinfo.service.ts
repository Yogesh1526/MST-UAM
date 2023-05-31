import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserInfoModel } from '../models/userinfo.model';
import { WebHttpClient } from '../webhttp/WebHttpClient';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

updateData(request: UserInfoModel): Observable<number> {
  return this.http.post('user/update', request)
}

addData(request: UserInfoModel): Observable<number> {
  throw new Error('Method not implemented.');
}

deleteData(id: number, request: UserInfoModel): Observable<UserInfoModel> {
  throw new Error('Method not implemented.');
}
isAlreadyExists(field: string, name: string): Observable<boolean> {
  throw new Error('Method not implemented.');
}


constructor(protected http:WebHttpClient) {
}


getById(id: any){
   return this.http.get('user/' + id)
}
saveUserInfo(request: UserInfoModel): Observable<boolean> {
  return this.http.post('user/create', request)
    // .pipe(
    //   map((result: any) => {
    //     return (result && result.data && result.data > 0);
    //   })
    // );
}

getAllUserData(){
  return this.http.get('user/all')
}
}
