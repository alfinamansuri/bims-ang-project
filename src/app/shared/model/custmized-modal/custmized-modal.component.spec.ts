import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmizedModalComponent } from './custmized-modal.component';

describe('CustmizedModalComponent', () => {
  let component: CustmizedModalComponent;
  let fixture: ComponentFixture<CustmizedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustmizedModalComponent]
    });
    fixture = TestBed.createComponent(CustmizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
