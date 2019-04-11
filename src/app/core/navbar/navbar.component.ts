import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {

  showNavBar: boolean = true;

  constructor() {
  }

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
    console.log('toggle sidebar ', this.showNavBar)
  }
}