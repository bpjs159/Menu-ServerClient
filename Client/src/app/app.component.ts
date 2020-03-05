/**
 * APP component, the main menu
 * Author: Sebastian Bonilla
 * 04/03/2020
 */

import { Component } from '@angular/core';
import { MenuDataService } from './services/menu-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu = []; //local menu

  constructor(private menuDataService:MenuDataService){
    this.menuDataService.getData().subscribe((requestedMenu) => {
      this.menu = requestedMenu;
    });
  }
}
