import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallefincaComponent } from './detallefinca.component';

describe('DetallefincaComponent', () => {
  let component: DetallefincaComponent;
  let fixture: ComponentFixture<DetallefincaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallefincaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallefincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
