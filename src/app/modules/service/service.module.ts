import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { SaveComponent } from './components/save/save.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [ListComponent, SaveComponent],
  imports: [CommonModule, ServiceRoutingModule],
})
export class ServiceModule {}
