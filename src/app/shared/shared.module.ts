import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarService } from './services/sidebar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    InputLabelComponent,
    LinkComponent,
    ButtonComponent,
    CheckboxComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  providers: [SidebarService],
  exports: [
    SidebarComponent,
    HeaderComponent,
    InputLabelComponent,
    LinkComponent,
    ButtonComponent,
    CheckboxComponent,
  ],
})
export class SharedModule {}
