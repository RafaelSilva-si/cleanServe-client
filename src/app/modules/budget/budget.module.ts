import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveComponent } from './components/save/save.component';
import { ListComponent } from './components/list/list.component';
import { BudgetRoutingModule } from './budget-routing.module';

@NgModule({
  declarations: [ListComponent, SaveComponent],
  imports: [CommonModule, BudgetRoutingModule],
})
export class BudgetModule {}
