import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FristpageComponent } from './fristpage.component';

describe('FristpageComponent', () => {
  let component: FristpageComponent;
  let fixture: ComponentFixture<FristpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FristpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FristpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
