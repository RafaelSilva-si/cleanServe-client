import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ListItem } from '../../models/sidebar-types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  listItem: ListItem[] = [];

  constructor(public sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.listItem = this.sidebarService.getMenuItems();
  }

  toggleMenu(): void {
    this.sidebarService.toggleMenu();
  }
}
