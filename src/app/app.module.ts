import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DPRCalcComponent } from './dprcalc/dprcalc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DprToolbarComponent } from './dpr-toolbar/dpr-toolbar.component';
import { MaterialModule } from './material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DPRCalcComponent, DprToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
