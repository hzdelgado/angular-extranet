import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserInfoComponent } from './features/home/components/user-info/user-info.component';
import { CurrentPositionComponent } from './features/home/components/current-position/current-position.component';
import { InvestmentFundComponent } from './features/home/components/investment-fund/investment-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    CurrentPositionComponent,
    InvestmentFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
