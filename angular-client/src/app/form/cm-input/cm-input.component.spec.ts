import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmInputComponent } from './cm-input.component';

describe('CmInputComponent', () => {
  let component: CmInputComponent;
  let fixture: ComponentFixture<CmInputComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CmInputComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
