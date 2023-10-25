import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsWeatherComponent } from './star-wars-weather.component';

describe('StarWarsWeatherComponent', () => {
  let component: StarWarsWeatherComponent;
  let fixture: ComponentFixture<StarWarsWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
