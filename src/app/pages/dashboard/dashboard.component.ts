import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs/internal/Observable';
import { onSideNavChange, animateText, onMainContentChange } from 'src/app/shared/animation/animation';

interface Page {
  link: string;
  name: string;
  icon: string;
  trigger: string;
  isSubmenu: boolean;
  showSubMenu: boolean;
  children: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [onSideNavChange, animateText, onMainContentChange],

})


export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  observer: any;
  @Input() isLoggedIn = false;

  public sideNavState: boolean = false;
  public onSideNavChange: boolean = false;
  public linkText: boolean = false;
  public currentRoute: string = '';
  menuList!: Observable<Page[]>;

  public pages: Page[] = [
    {
      name: 'Company', link: '/register', icon: 'chrome_reader_mode',
       trigger: 'Keyboard Arrow Down', isSubmenu: true,showSubMenu: false,
      children: [
        { name: 'Company Registration', link: '/company-registration', icon: 'chrome_reader_mode' },
        { name: 'Company Address', link: '/company-address', icon: 'chrome_reader_mode' },
        { name: 'Company Email Configuration', link: '/company-config', icon: 'chrome_reader_mode' },
        { name: 'Company User Registration', link: '/company-user', icon: 'chrome_reader_mode' },
      ]
    },
    {
      name: 'Vendor', link: '', icon: 'chrome_reader_mode',
       trigger: 'Keyboard Arrow Down', isSubmenu: true,showSubMenu: false,
      children: [
        { name: 'Vendor Registration', link: '/vendor-registration', icon: 'chrome_reader_mode' },
        { name: 'Vendor Bank Details', link: '/vendor-bank-details', icon: 'chrome_reader_mode' },
  
      ]
    },
    //  { name: 'Vendor', link: '/dashboard', icon: 'create_new_folder' },
    { name: 'Admin', link: '', icon: 'spellcheck', trigger: '', children:[
      { name: 'Role list', link: '/role-list', icon: 'chrome_reader_mode' },
    ], isSubmenu: true,showSubMenu: false, },
    { name: 'Setting', link: '/datatable', icon: 'settings', trigger: '', children: '', isSubmenu: false, showSubMenu: false,},
    { name: 'Master', link: '/company-list', icon: 'settings', trigger: '', 
    children: [
      { name: 'User Info', link: '/user-info', icon: 'chrome_reader_mode' },
    ], 
    isSubmenu: true,showSubMenu: false, },


  ];

  constructor() {
    this.onSinenavToggle();
  }

  ngOnInit(): void {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;
    this.onSideNavChange = !this.onSideNavChange;
    setTimeout(() => {
      this.linkText = this.sideNavState;
      this.linkText = this.onSideNavChange;
    }, 200);
    // this.sidenavService.sideNavState$.next(this.sideNavState);
  }

  isRouteActive(page: Page) {
    const url = window.location.href.toLowerCase();
    if (page.name == 'Case Summary') {
      return url.indexOf(page.link) > -1
    }
    else {
      return url.indexOf(page.link) > -1 && url.indexOf('case-summary/details') == -1;
    }
  }

}
