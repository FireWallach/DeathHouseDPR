import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DPRCalcComponent } from './dprcalc/dprcalc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DprToolbarComponent } from './dpr-toolbar/dpr-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, DPRCalcComponent, DprToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [MatToolbarHarness],
  bootstrap: [AppComponent],
})
export class AppModule {}
