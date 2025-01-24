import { Component } from '@angular/core';
import { appTitle } from 'src/app/database/constants';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  appTitle = appTitle;
  constructor(
    // Empty
  ) {
    // Empty
  }
}
