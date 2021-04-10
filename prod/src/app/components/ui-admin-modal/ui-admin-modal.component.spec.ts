import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAdminModalComponent } from './ui-admin-modal.component';

describe('UiAdminModalComponent', () => {
  let component: UiAdminModalComponent;
  let fixture: ComponentFixture<UiAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAdminModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
