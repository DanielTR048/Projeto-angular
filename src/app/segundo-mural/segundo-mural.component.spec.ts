import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoMuralComponent } from './segundo-mural.component';

describe('SegundoMuralComponent', () => {
  let component: SegundoMuralComponent;
  let fixture: ComponentFixture<SegundoMuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoMuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoMuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
