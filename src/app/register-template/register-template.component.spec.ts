import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTemplateComponent } from './register-template.component';

describe('RegisterTemplateComponent', () => {
  let component: RegisterTemplateComponent;
  let fixture: ComponentFixture<RegisterTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTemplateComponent]
    });
    fixture = TestBed.createComponent(RegisterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
