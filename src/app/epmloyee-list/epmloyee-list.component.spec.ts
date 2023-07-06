import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmloyeeListComponent } from './epmloyee-list.component';

describe('EpmloyeeListComponent', () => {
  let component: EpmloyeeListComponent;
  let fixture: ComponentFixture<EpmloyeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpmloyeeListComponent]
    });
    fixture = TestBed.createComponent(EpmloyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
