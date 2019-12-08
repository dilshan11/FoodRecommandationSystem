import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealhomeComponent } from './mealhome.component';

describe('MealhomeComponent', () => {
  let component: MealhomeComponent;
  let fixture: ComponentFixture<MealhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
