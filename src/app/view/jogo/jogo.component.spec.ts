import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jogoComponent } from './jogo.component';

describe('jogoComponent', () => {
  let component: jogoComponent;
  let fixture: ComponentFixture<jogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
