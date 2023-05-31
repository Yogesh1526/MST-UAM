import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmailConfigComponent } from './company-email-config.component';

describe('CompanyEmailConfigComponent', () => {
  let component: CompanyEmailConfigComponent;
  let fixture: ComponentFixture<CompanyEmailConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEmailConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEmailConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
