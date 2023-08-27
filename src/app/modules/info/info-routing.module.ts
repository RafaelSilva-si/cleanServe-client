import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: InfoComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
