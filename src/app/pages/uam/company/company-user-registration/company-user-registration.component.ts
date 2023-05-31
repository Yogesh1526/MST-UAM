import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { CompanyUserModel } from 'src/app/shared/models/company-user.model';
import { CompanyUserService } from 'src/app/shared/services/company-user-services';

@Component({
  selector: 'app-company-user-registration',
  templateUrl: './company-user-registration.component.html',
  styleUrls: ['./company-user-registration.component.css']
})
export class CompanyUserRegistrationComponent implements OnInit {

  companyUserForm !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;

  constructor( private fb: FormBuilder , public companyUserService : CompanyUserService) {
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
    companyDetails: 'companyDetails',

  };

  
  ngOnInit(): void {
    this.formInit();
  }

  formInit() {

    this.companyUserForm = this.fb.group({
      userName : new FormControl('',[Validators.required]),
      role : new FormControl(),
      designation : new FormControl(),
      companyDetails : new FormControl(),
      contactNumber : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.pattern(PatternValidation.email)]),
  

    });
  }

  saveData(){
  
    const model: CompanyUserModel = new CompanyUserModel();
     model.employeeName = this.companyUserForm.controls['userName'].value as string;
     model.designation = this.companyUserForm.controls['designation'].value as string;
     model.role = this.companyUserForm.controls['role'].value as string;
     model.email = this.companyUserForm.controls['email'].value as string;
     model.contactNo = this.companyUserForm.controls['contactNumber'].value as string;
 
     this.companyUserService.saveUserInfo(model).subscribe((res : any) => {
       if(res.message === "User Created successfully..")
         console.log("toster working");
     })
  }


}
