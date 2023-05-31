import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/interceptors/ErrorState/confirmPassword';
import { PatternValidation } from 'src/app/shared/enums/pattern.validation';
import { ChangePasswordModel } from 'src/app/shared/models/change-password.model';
import { ChangePasswordService } from 'src/app/shared/services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm !: FormGroup;

  constructor( private fb: FormBuilder, public passwordService : ChangePasswordService) { }

  ngOnInit(): void {
     this.formInit();
  }

  formInit() {

    this.changePasswordForm = this.fb.group({
      userName : new FormControl('',[Validators.required]),
      oldPassword : new FormControl('',[Validators.required]),
      newPassword : new FormControl('',[Validators.required]),
      conformPassword : new FormControl('',[Validators.required]),
    },
    { 
      validator: ConfirmedValidator('newPassword', 'conformPassword')
    }
    
    );
  }


  saveData(){
   
    const model: ChangePasswordModel = new ChangePasswordModel();
     model.userName    = this.changePasswordForm.controls['userName'].value as string;
     model.oldPassword = this.changePasswordForm.controls['oldPassword'].value as string;
     model.newPassword = this.changePasswordForm.controls['newPassword'].value as string;
     model.confirmPassword = this.changePasswordForm.controls['conformPassword'].value as string;
      this.passwordService.saveDetails(model).subscribe((res : any) => {
          console.log("res");
      })
  }

 
}
