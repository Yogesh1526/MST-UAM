import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUserRegistrationComponent } from './company-user-registration.component';

describe('CompanyUserRegistrationComponent', () => {
  let component: CompanyUserRegistrationComponent;
  let fixture: ComponentFixture<CompanyUserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyUserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
