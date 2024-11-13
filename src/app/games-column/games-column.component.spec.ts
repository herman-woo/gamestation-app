import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesColumnComponent } from './games-column.component';

describe('GamesColumnComponent', () => {
  let component: GamesColumnComponent;
  let fixture: ComponentFixture<GamesColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
