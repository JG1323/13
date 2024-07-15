import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalesComponent } from './digitales.component';

describe('DigitalesComponent', () => {
  let component: DigitalesComponent;
  let fixture: ComponentFixture<DigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
