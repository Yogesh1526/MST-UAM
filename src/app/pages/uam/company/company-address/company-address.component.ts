import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { CompanyAddressModel } from 'src/app/shared/models/company-address.model';
import { CompanyAddressService } from 'src/app/shared/services/company-address.services';

@Component({
  selector: 'app-company-address',
  templateUrl: './company-address.component.html',
  styleUrls: ['./company-address.component.css']
})
export class CompanyAddressComponent implements OnInit {

 
  companyAddress !: FormGroup;
 

  constructor( private fb: FormBuilder, public companyAddressService:CompanyAddressService) {
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

    this.companyAddress = this.fb.group({
      address1 : new FormControl('',[Validators.required]),
      address2 : new FormControl(),
      address3 : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      zipCode : new FormControl(),
      country : new FormControl(),
      option1 : new FormControl(),
      option2 : new FormControl(),
      option3 : new FormControl(''),
      // contactNumber : new FormControl(''),

    });
  }

  saveData(){
  
    // console.log(this.selectedYears);
    // var newArray: { roleId: any; }[] = [];
    //   this.selectedYears.forEach(function (id: any) {
    //     newArray.push({ "roleId": id });
    //   });

    const model: CompanyAddressModel = new CompanyAddressModel();
     model.address1 = this.companyAddress.controls['address1'].value as string;
     model.address2 = this.companyAddress.controls['address2'].value as string;
     model.address3 = this.companyAddress.controls['address3'].value as string;
     model.city = this.companyAddress.controls['city'].value as string;
     model.state = this.companyAddress.controls['state'].value as string;
     model.postCode = this.companyAddress.controls['zipCode'].value as string;
     model.country = this.companyAddress.controls['country'].value as string;
     model.optional1 = this.companyAddress.controls['option1'].value as string;
     model.optional2 = this.companyAddress.controls['option2'].value as string;
     model.optional3 = this.companyAddress.controls['option3'].value as string;

     model.customerDto = [{
      "customerId":5
     }]
 

     this.companyAddressService.saveCompanyAddress(model).subscribe((res : any) => {
       if(res.message === "User Created successfully..")
         console.log("toster working");
     })
  }
  
}
