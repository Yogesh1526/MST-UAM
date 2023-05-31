import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { CompanyEmailModel } from 'src/app/shared/models/company-email.model';
import { CompanyEmailService } from 'src/app/shared/services/company-email.services';

@Component({
  selector: 'app-company-email-config',
  templateUrl: './company-email-config.component.html',
  styleUrls: ['./company-email-config.component.css']
})
export class CompanyEmailConfigComponent implements OnInit {

  
  companyEmailform !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;

  constructor( private fb: FormBuilder, public emailServices : CompanyEmailService) {
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
    this.formInit();
  }

  formInit() {

    this.companyEmailform = this.fb.group({
      port : new FormControl(''),
      userName : new FormControl(''),
      passWord : new FormControl(''),
      email : new FormControl(''),
      url : new FormControl(''),
    
    });
  }

  saveData(){
  
    const model: CompanyEmailModel = new CompanyEmailModel();
     model.userName = this.companyEmailform.controls['userName'].value as string;
     model.password = this.companyEmailform.controls['passWord'].value as string;
     model.port = this.companyEmailform.controls['port'].value;
     model.email = this.companyEmailform.controls['email'].value as string;
     model.url = this.companyEmailform.controls['url'].value as string;
     model.customerDto = {"customerId": 4}

     this.emailServices.saveEmailDetails(model).subscribe((res : any) => {
       if(res.message === "User Created successfully..")
         console.log("toster working");
     })
  }


}
