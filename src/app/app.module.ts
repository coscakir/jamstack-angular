import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
@NgModule({
  declarations: [AppComponent, LangSelectorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
