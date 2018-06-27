import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MaterialModule } from './../material.module'
import { CurrentWeatherComponent } from './current-weather.component'
import { WeatherService } from './../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
