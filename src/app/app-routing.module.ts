import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetModule } from './modules/budget/budget.module';
import { ClientModule } from './modules/client/client.module';
import { ServiceModule } from './modules/service/service.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { InfoModule } from './modules/info/info.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthenticatedComponent } from './modules/layout/authenticated/authenticated.component';
import { AuthComponent } from './modules/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule,
      },
      {
        path: 'budget',
        loadChildren: () => BudgetModule,
      },
      {
        path: 'client',
        loadChildren: () => ClientModule,
      },
      {
        path: 'service',
        loadChildren: () => ServiceModule,
      },
      {
        path: 'schedule',
        loadChildren: () => ScheduleModule,
      },
      {
        path: 'info',
        loadChildren: () => InfoModule,
      },
      {
        path: 'profile',
        loadChildren: () => ProfileModule,
      },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [{ path: 'auth', loadChildren: () => AuthModule }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
