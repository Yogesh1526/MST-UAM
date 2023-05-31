import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { onSideNavChange, animateText, onMainContentChange } from 'src/app/shared/animation/animation';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { BaseValidationsComponent } from 'src/app/shared/validation/base.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [onSideNavChange, animateText, onMainContentChange],

})
export class RegisterComponent  implements  OnInit {


  companyDetailsform !: FormGroup;
  selectedFile: any = null;
  currentFile: any;
  fileName: any;

  constructor( private fb: FormBuilder) {
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
      annualRevenue : new FormControl('',[Validators.required]),
      websiteDetails : new FormControl(''),

    });
  }

 

onFileSelected(event: any): void {
  this.selectedFile = event.target.files[0] ?? null;

}

selectFile(event: any): void {
  if (event.target.files && event.target.files[0]) {
    const file: File = event.target.files[0];
    this.currentFile = file;
    this.fileName = this.currentFile.name;
  } else {
    this.fileName = 'Select File';
  }
} 
}
