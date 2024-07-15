import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicoDeportivosComponent } from './fisico-deportivos.component';

describe('FisicoDeportivosComponent', () => {
  let component: FisicoDeportivosComponent;
  let fixture: ComponentFixture<FisicoDeportivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisicoDeportivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisicoDeportivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
