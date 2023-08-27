import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { SaveComponent } from './components/save/save.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [ListComponent, SaveComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
