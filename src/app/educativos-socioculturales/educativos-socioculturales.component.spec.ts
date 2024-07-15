import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativosSocioculturalesComponent } from './educativos-socioculturales.component';

describe('EducativosSocioculturalesComponent', () => {
  let component: EducativosSocioculturalesComponent;
  let fixture: ComponentFixture<EducativosSocioculturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducativosSocioculturalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducativosSocioculturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
