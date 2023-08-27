import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetModule } from './modules/budget/budget.module';
import { ClientModule } from './modules/client/client.module';

const routes: Routes = [
  { path: 'budget', loadChildren: () => BudgetModule },
  { path: 'client', loadChildren: () => ClientModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
