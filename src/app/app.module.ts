import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DPRCalcComponent } from './dprcalc/dprcalc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DprToolbarComponent } from './dpr-toolbar/dpr-toolbar.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, DPRCalcComponent, DprToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
