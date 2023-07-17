import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalAndBooleanComponent } from './conditional-and-boolean.component';

describe('ConditionalAndBooleanComponent', () => {
  let component: ConditionalAndBooleanComponent;
  let fixture: ComponentFixture<ConditionalAndBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalAndBooleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalAndBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
