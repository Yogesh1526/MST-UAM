import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CompanyRegisterComponent } from './uam/company/company-register/company-register.component';
import { CompanyEmailConfigComponent } from './uam/company/company-email-config/company-email-config.component';
import { CompanyAddressComponent } from './uam/company/company-address/company-address.component';
import { CompanyUserRegistrationComponent } from './uam/company/company-user-registration/company-user-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListOfCompaniesComponent } from './master/list-of-companies/list-of-companies.component';
import { UserInfoComponent } from './master/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleListComponent } from './uam/role/role-list/role-list.component';
import { RoleDetailsComponent } from './uam/role/role-details/role-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VendorRegistrationComponent } from './uam/vendor-registration/vendor-registration.component';
import { VendorBankDetailsComponent } from './uam/vendor-bank-details/vendor-bank-details.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CompanyRegisterComponent,
    CompanyEmailConfigComponent,
    CompanyAddressComponent,
    CompanyUserRegistrationComponent,
    ListOfCompaniesComponent,
    UserInfoComponent,
    RoleListComponent,
    RoleDetailsComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VendorRegistrationComponent,
    VendorBankDetailsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,BrowserModule, MaterialModule,BrowserAnimationsModule,RouterModule,PagesRoutingModule,
    FlexLayoutModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  exports: [ PagesComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    RegisterComponent
  ],
})
export class PagesModule { }
