import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetModule } from './modules/budget/budget.module';
import { ClientModule } from './modules/client/client.module';
import { ServiceModule } from './modules/service/service.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: 'budget', loadChildren: () => BudgetModule },
  { path: 'client', loadChildren: () => ClientModule },
  { path: 'service', loadChildren: () => ServiceModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
