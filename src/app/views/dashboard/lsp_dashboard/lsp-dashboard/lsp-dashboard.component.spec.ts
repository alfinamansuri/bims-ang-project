import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspDashboardComponent } from './lsp-dashboard.component';

describe('LspDashboardComponent', () => {
  let component: LspDashboardComponent;
  let fixture: ComponentFixture<LspDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LspDashboardComponent]
    });
    fixture = TestBed.createComponent(LspDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
