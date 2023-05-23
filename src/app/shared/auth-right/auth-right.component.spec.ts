import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRightComponent } from './auth-right.component';

describe('AuthRightComponent', () => {
  let component: AuthRightComponent;
  let fixture: ComponentFixture<AuthRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRightComponent]
    });
    fixture = TestBed.createComponent(AuthRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
