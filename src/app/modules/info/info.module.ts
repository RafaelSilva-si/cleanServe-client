import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { FaqComponent } from './components/faq/faq.component';
import { InfoRoutingModule } from './info-routing.module';

@NgModule({
  declarations: [InfoComponent, FaqComponent],
  imports: [CommonModule, InfoRoutingModule],
})
export class InfoModule {}
