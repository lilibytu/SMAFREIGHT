import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPromisesComponent } from './company-promises.component';

describe('CompanyPromisesComponent', () => {
  let component: CompanyPromisesComponent;
  let fixture: ComponentFixture<CompanyPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
