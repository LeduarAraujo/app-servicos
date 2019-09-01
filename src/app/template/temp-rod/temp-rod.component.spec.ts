import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRodComponent } from './temp-rod.component';

describe('TempRodComponent', () => {
  let component: TempRodComponent;
  let fixture: ComponentFixture<TempRodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempRodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
