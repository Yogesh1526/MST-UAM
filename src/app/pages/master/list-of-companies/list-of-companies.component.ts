import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoModel } from 'src/app/shared/models/userinfo.model';
import { UserinfoService } from 'src/app/shared/services/userinfo.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

@Component({
  selector: 'app-list-of-companies',
  templateUrl: './list-of-companies.component.html',
  styleUrls: ['./list-of-companies.component.css']
})
export class ListOfCompaniesComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'email', 'userName', 'action'];
  dataSource : any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  recId!: number;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;

  //  }
  
  constructor( public userService: UserinfoService, public router: Router,private route: ActivatedRoute,) {
   
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  

  getAllUser(){
     this.userService.getAllUserData().subscribe( res =>{
         console.log(res);
         this.dataSource = res;
     })
  }

  // getData(id: any) {
  //     this.userService.getById(id).subscribe( res =>{
  //       console.log(res);
  //   })
  // }

  emitRowAction(id: UserInfoModel){
    this.router.navigate(['/user-info',id]);
  }

}

