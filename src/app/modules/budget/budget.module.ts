import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveComponent } from './components/save/save.component';
import { ListComponent } from './components/list/list.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@NgModule({
  declarations: [ListComponent, SaveComponent, ButtonComponent],
  imports: [CommonModule, BudgetRoutingModule],
})
export class BudgetModule {}
