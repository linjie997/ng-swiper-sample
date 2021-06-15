import { Component } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-test-project';

  links: Routes = routes;
  activeLink: Route;

}
