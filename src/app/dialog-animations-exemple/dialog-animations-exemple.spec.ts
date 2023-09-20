import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimationsExempleComponent } from './dialog-animations-exemple.component';

describe('DialogAnimationsExempleComponent', () => {
  let component: DialogAnimationsExempleComponent;
  let fixture: ComponentFixture<DialogAnimationsExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAnimationsExempleComponent]
    });
    fixture = TestBed.createComponent(DialogAnimationsExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
