import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './modules/layout/auth/auth.component';
import { AuthenticatedComponent } from './modules/layout/authenticated/authenticated.component';

@NgModule({
  declarations: [AppComponent, AuthenticatedComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
