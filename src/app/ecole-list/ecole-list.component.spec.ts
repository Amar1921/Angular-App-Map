import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleListComponent } from './ecole-list.component';

describe('EcoleListComponent', () => {
  let component: EcoleListComponent;
  let fixture: ComponentFixture<EcoleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcoleListComponent]
    });
    fixture = TestBed.createComponent(EcoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
