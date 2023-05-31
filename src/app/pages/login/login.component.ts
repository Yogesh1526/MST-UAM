import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/shared/services/common/permission.services';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  constructor( public loginService: LoginService, public router: Router,) { }

  loginFailed: boolean = false;

    ngOnInit(): void {
    this.initForm();
    if (this.loginService.GetUser()) {
      this.router.navigate(['/login'],{skipLocationChange: true});
    }
    else{
      this.loginService.logout();
    }
  }

  initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loginFailed = false;
    const loginDetails = {
      userName: this.loginForm.controls['userName'].value as string,
    //  password: window.btoa(this.loginForm.controls['password'].value as string),
    password: this.loginForm.controls['password'].value as string,
    };
    this.loginService.authenticate(loginDetails).subscribe((resp: any) => {
      this.loginService.setUser(resp);
    })
  }
}
