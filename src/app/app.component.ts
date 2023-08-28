import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SidebarService } from './shared/services/sidebar.service';
import {
  faHome,
  faCoffee,
  faShieldAlt,
  faCalendarWeek,
  faReceipt,
  faUser,
  faSlidersH,
  faArrowLeft,
  faBars,
  faBell,
  faChevronDown,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(library: FaIconLibrary, public sidebarService: SidebarService) {
    library.addIcons(faHome);
    library.addIcons(faCoffee);
    library.addIcons(faShieldAlt);
    library.addIcons(faCalendarWeek);
    library.addIcons(faReceipt);
    library.addIcons(faUser);
    library.addIcons(faSlidersH);
    library.addIcons(faArrowLeft);
    library.addIcons(faBars);
    library.addIcons(faBell);
    library.addIcons(faChevronDown);
    library.addIcons(faInfo);
  }
}
