import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdashboardsComponent } from './stdashboards.component';

describe('StdashboardsComponent', () => {
  let component: StdashboardsComponent;
  let fixture: ComponentFixture<StdashboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdashboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
