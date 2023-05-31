import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ListOfCompaniesComponent } from './master/list-of-companies/list-of-companies.component';
import { UserInfoComponent } from './master/user-info/user-info.component';
import { RegisterComponent } from './register/register.component';
import { CompanyAddressComponent } from './uam/company/company-address/company-address.component';
import { CompanyEmailConfigComponent } from './uam/company/company-email-config/company-email-config.component';
import { CompanyRegisterComponent } from './uam/company/company-register/company-register.component';
import { CompanyUserRegistrationComponent } from './uam/company/company-user-registration/company-user-registration.component';
import { RoleDetailsComponent } from './uam/role/role-details/role-details.component';
import { RoleListComponent } from './uam/role/role-list/role-list.component';
import { DataTableComponent } from '../shared/component/data-table/data-table.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VendorRegistrationComponent } from './uam/vendor-registration/vendor-registration.component';
import { VendorBankDetailsComponent } from './uam/vendor-bank-details/vendor-bank-details.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'dashboard',  pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'layout', component:LayoutComponent},
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent},
    { path: 'change-password', component: ChangePasswordComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'company-registration', component: CompanyRegisterComponent },
    { path: 'company-address', component: CompanyAddressComponent },
    { path: 'company-config', component: CompanyEmailConfigComponent },
    { path: 'company-user', component: CompanyUserRegistrationComponent },
    { path: 'company-list', component:ListOfCompaniesComponent},
    { path: 'user-info/:id', component:UserInfoComponent},
    { path: 'role-list', component:RoleListComponent},
    { path: 'role-info/:id', component:RoleDetailsComponent},
    { path: 'datatable', component:DataTableComponent},
    { path: 'vendor-registration', component:VendorRegistrationComponent},
    { path: 'vendor-bank-details', component:VendorBankDetailsComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
