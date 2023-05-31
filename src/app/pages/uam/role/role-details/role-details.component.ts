import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoleModel } from 'src/app/shared/models/role.model';
import { PermissionService } from 'src/app/shared/services/common/permission.services';

// export interface permission {
//   id: number;
//   role: string;
// }

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

  roleForm !: FormGroup;
  permissionList: any;
  selectedYears: any;


  // public permission: permission[] = [
  //   {id: 1, role: 'Admin'},
  //   {id: 2, role: 'Superadmin'},
  //   {id: 3, role: 'User'},
  // ]

  constructor( private fb: FormBuilder, public permissionServices: PermissionService) { }

  ngOnInit(): void {
    this.formInit();
    this.getAllPermission()
  }


  getAllPermission(){
    this.permissionServices.getAllPermission().subscribe( (res:any) => {
        this.permissionList = res.data;
        console.log(res);
    })
  }

  formInit() {

    this.roleForm = this.fb.group({
      name : new FormControl('',[Validators.required]),
      permission : new FormControl('',[Validators.required]),
    })
  }

  saveData(){
    console.log(this.selectedYears);
    var newArray: { permissionId: any; }[] = [];
      this.selectedYears.forEach(function (id: any) {
        newArray.push({ "permissionId": id });
      });
    const model: RoleModel = new RoleModel();
     model.name = this.roleForm.controls['name'].value as string;
     model.permissionDto = newArray  // problem here
     this.permissionServices.saveRole(model).subscribe((res : any) => {
      console.log(res);
     })
  }

  
}
