import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasComponent } from './fincas.component';

describe('FincasComponent', () => {
  let component: FincasComponent;
  let fixture: ComponentFixture<FincasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FincasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
