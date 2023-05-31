import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { CompanyRegistrationModel } from 'src/app/shared/models/company-registration.model';
import { CompanyRegistrationService } from 'src/app/shared/services/company-registration.services';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {

  
  companyDetailsform !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;

  constructor( private fb: FormBuilder, public companyregistration: CompanyRegistrationService) {
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
    contactName: 'contactName'

  };

  
  ngOnInit(): void {
    this.formInit();
  }

  formInit() {

    this.companyDetailsform = this.fb.group({
      companyName : new FormControl('',[Validators.required]),
      CIAnumber : new FormControl('',[Validators.required,Validators.pattern(PatternValidation.cinNumber)]),
      panNumber : new FormControl('',[Validators.required,  Validators.pattern(PatternValidation.PanCard)]),
      gstNumber : new FormControl('',[Validators.required, Validators.pattern(PatternValidation.gstNumber)]),
      phoneNumber: new FormControl('',[Validators.required]),
      companyWebsite : new FormControl(),
      contactNumber : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.pattern(PatternValidation.email)]),
      sizeoftheCompany : new FormControl('',[Validators.required]),
      contactName : new FormControl('',[Validators.required]),
      websiteDetails : new FormControl(''),

    });
  }

  
  saveData(){
  
    const model: CompanyRegistrationModel = new CompanyRegistrationModel();
     model.companyName = this.companyDetailsform.controls['companyName'].value as string;
     model.contactName = this.companyDetailsform.controls['contactName'].value as string;
     model.ciaNumber = this.companyDetailsform.controls['CIAnumber'].value as string;
     model.email = this.companyDetailsform.controls['email'].value as string;
     model.panNumber = this.companyDetailsform.controls['panNumber'].value as string;
     model.gstNumber = this.companyDetailsform.controls['gstNumber'].value as string;
     model.mobileNumber = this.companyDetailsform.controls['contactNumber'].value as number;
     model.logo = "null";
     model.webSite = this.companyDetailsform.controls['websiteDetails'].value as string;
     this.companyregistration.saveCompanyInfo(model).subscribe((res : any) => {
       if(res.message === "User Created successfully..")
         console.log("toster working");
     })
  }


}
