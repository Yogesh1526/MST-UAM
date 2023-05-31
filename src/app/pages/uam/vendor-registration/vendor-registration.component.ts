import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { VendorRegistrationModel } from 'src/app/shared/models/vendor-registration.model';
import { VendorRegistrationService } from 'src/app/shared/services/vendor-registration-services';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {

  vendorDetailsform !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;

  constructor( private fb: FormBuilder, public companyregistration: VendorRegistrationService) {
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

    this.vendorDetailsform = this.fb.group({
      vendorName : new FormControl('',[Validators.required]),
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
  
    const model: VendorRegistrationModel = new VendorRegistrationModel();
     model.vendorName = this.vendorDetailsform.controls['vendorName'].value as string;
     model.contactName = this.vendorDetailsform.controls['contactName'].value as string;
     model.ciaNumber = this.vendorDetailsform.controls['CIAnumber'].value as string;
     model.email = this.vendorDetailsform.controls['email'].value as string;
     model.panNumber = this.vendorDetailsform.controls['panNumber'].value as string;
     model.gstNumber = this.vendorDetailsform.controls['gstNumber'].value as string;
     model.contactNumber = this.vendorDetailsform.controls['contactNumber'].value as number;
     model.logo = "null";
     model.webSite = this.vendorDetailsform.controls['websiteDetails'].value as string;
     model.customerDto =  {"customerId":5}
     this.companyregistration.saveCompanyInfo(model).subscribe((res : any) => {
       if(res.message === "User Created successfully..")
         console.log("toster working");
     })
  }
}
