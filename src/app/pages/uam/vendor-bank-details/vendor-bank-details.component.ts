import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VendorBankRegistrationModel } from 'src/app/shared/models/vendor-bank-registration.model';
import { VendorBankRegistrationService } from 'src/app/shared/services/vendor-bank-registration.services';

@Component({
  selector: 'app-vendor-bank-details',
  templateUrl: './vendor-bank-details.component.html',
  styleUrls: ['./vendor-bank-details.component.css']
})
export class VendorBankDetailsComponent implements OnInit {

  vendorBankDetailsform !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;

  constructor( private fb: FormBuilder, public VendorBankregistration: VendorBankRegistrationService) {
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

    this.vendorBankDetailsform = this.fb.group({
      bankName : new FormControl('',[Validators.required]),
      bankBranchAddress : new FormControl('',[Validators.required]),
      ifscCode : new FormControl('',[Validators.required]),
      swiftCode : new FormControl('',[Validators.required]),
      accountName : new FormControl('',[Validators.required]),
      accountType : new FormControl('',[Validators.required]),
      accountNumber : new FormControl('',[Validators.required]),
    

    });
  }

  
  saveData(){
  
    const model: VendorBankRegistrationModel = new VendorBankRegistrationModel();
     model.bankName = this.vendorBankDetailsform.controls['bankName'].value as string;
     model.bankBranchAddress = this.vendorBankDetailsform.controls['bankBranchAddress'].value as string;
     model.ifscCode = this.vendorBankDetailsform.controls['ifscCode'].value as string;
     model.swiftCode = this.vendorBankDetailsform.controls['swiftCode'].value as string;
     model.accountName = this.vendorBankDetailsform.controls['accountName'].value as string;
     model.accountType = this.vendorBankDetailsform.controls['accountType'].value as string;
     model.accountNumber = this.vendorBankDetailsform.controls['accountNumber'].value as number;
     model.vendorDetailsDto = {
      "vendorId":3
  }
   
     this.VendorBankregistration.saveCompanyInfo(model).subscribe((res : any) => {
       if(res.message === "User Created successfully..")
         console.log("toster working");
     })
  }

}
