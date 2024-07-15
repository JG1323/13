import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeuticosComponent } from './terapeuticos.component';

describe('TerapeuticosComponent', () => {
  let component: TerapeuticosComponent;
  let fixture: ComponentFixture<TerapeuticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeuticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeuticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
