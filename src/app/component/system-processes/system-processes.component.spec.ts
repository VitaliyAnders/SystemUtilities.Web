import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemProcessesComponent } from './system-processes.component';

describe('SystemProcessesComponent', () => {
  let component: SystemProcessesComponent;
  let fixture: ComponentFixture<SystemProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
