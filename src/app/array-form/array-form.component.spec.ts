import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFormComponent } from './array-form.component';

describe('ArrayFormComponent', () => {
  let component: ArrayFormComponent;
  let fixture: ComponentFixture<ArrayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
