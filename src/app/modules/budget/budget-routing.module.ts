import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SaveComponent } from './components/save/save.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'save', component: SaveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
