import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { UserInfoModel } from 'src/app/shared/models/userinfo.model';
import { UserinfoService } from 'src/app/shared/services/userinfo.service';

export interface role {
  id: number;
  role: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;
  selectedYears: any;

  public roleList: role[] = [
    {id: 1, role: 'Admin'},
    {id: 2, role: 'Superadmin'},
    {id: 3, role: 'User'},
  ]
  recId: any;
  patchData: any;

  constructor( private fb: FormBuilder, public userService:UserinfoService, private route: ActivatedRoute,) {
  }

  properties: any = {
    companyName: 'companyName',
    CIAnumber: 'CIAnumber',
    panNumber: 'panNumber',
    lineOfBusiness: 'lineOfBusiness',
    parentAccount: 'parentAccount',
    contactNumber: 'contactNumber',
    email: 'email',
    sizeoftheCompany: 'sizeoftheCompany',
    annualRevenue: 'annualRevenue',
    websiteDetails: 'websiteDetails',

  };

  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recId = params['id'] ? +params['id'] : 0;
      if (this.recId > 0) {
         this.getData(this.recId);
      }
    });

    this.formInit();
  }

  getData(id: any) {
    this.userService.getById(id).subscribe( res =>{
      this.patchData = res;
       this.userInfo.patchValue({
        userName: this.patchData.data.userName,
        password: this.patchData.data.password,
        name: this.patchData.data.name,
        email: this.patchData.data.email,
        role: this.selectedYears
       })
  })
}

  formInit() {

    this.userInfo = this.fb.group({
      userName : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      name : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.pattern(PatternValidation.email)]),
      role : new FormControl('',[Validators.required])
  
    });
  }

  saveData(){
    console.log(this.selectedYears);
    var newArray: { roleId: any; }[] = [];
      this.selectedYears.forEach(function (id: any) {
        newArray.push({ "roleId": id });
      });
    const model: UserInfoModel = new UserInfoModel();
     model.userId    = this.recId? + this.recId: 0;
     model.userName = this.userInfo.controls['userName'].value as string;
     model.password = this.userInfo.controls['password'].value as string;
     model.name = this.userInfo.controls['name'].value as string;
     model.email = this.userInfo.controls['email'].value as string;
     model.roleDto = newArray  // problem here

     if(this.recId > 0) {
      this.userService.updateData(model).subscribe((res : any) => {
        if(res.message === "User Created successfully..")
          console.log("toster working");
      })
    
    } else {
      this.userService.saveUserInfo(model).subscribe((res : any) => {
        if(res.message === "User Created successfully..")
          console.log("toster working");
      })
    }
  }

}
