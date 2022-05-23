import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryIndustryComponent } from './salary-industry.component';

describe('SalaryIndustryComponent', () => {
  let component: SalaryIndustryComponent;
  let fixture: ComponentFixture<SalaryIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
