import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { SaveComponent } from './components/save/save.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  declarations: [ListComponent, SaveComponent],
  imports: [CommonModule, ScheduleRoutingModule],
})
export class ScheduleModule {}
