import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarService } from './services/sidebar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, FontAwesomeModule, AppRoutingModule],
  providers: [SidebarService],
  exports: [SidebarComponent, HeaderComponent],
})
export class SharedModule {}
