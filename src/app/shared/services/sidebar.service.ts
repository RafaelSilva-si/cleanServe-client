import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ListItem {
  label: string;
  icon: IconProp;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpen = false;
  private menuList: ListItem[] = [
    {
      label: 'Dashboard',
      icon: 'home',
      path: 'dashboard',
    },
    {
      label: 'Serviços',
      icon: 'shield-alt',
      path: 'service',
    },
    {
      label: 'Orçamentos',
      icon: 'receipt',
      path: 'budget',
    },
    {
      label: 'Agendamento',
      icon: 'calendar-week',
      path: 'schedules',
    },
    {
      label: 'Clientes',
      icon: 'user',
      path: 'client',
    },
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  menuStatus() {
    return this.isOpen;
  }

  getMenuItems() {
    return this.menuList;
  }
}
