import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-saigon-card',
  templateUrl: './saigon-card.component.html',
  styleUrls: ['./saigon-card.component.css']
})
export class SaigonCardComponent implements OnInit, OnDestroy {

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;

  constructor(public weather: WeatherService,
              public router: Router,
              public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.weather.getWeatherState('Japan')
      .subscribe((data: string) => {
        this.condition = data;
      });

    this.weather.getCurrentTemp('Japan').subscribe((data: number) => {
      this.currentTemp = data;
    });
    this.weather.getMinTemp('Japan').subscribe((data: number) => {
      this.minTemp = data;
    });
    this.weather.getMaxTemp('Japan').subscribe((data: number) => {
      this.maxTemp = data;
    });
  }

  ngOnDestroy() {

  }

  openDetails() {
    this.router.navigateByUrl('/details/japan');
  }

}
