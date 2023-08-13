import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SucessalertComponent } from './sucessalert/sucessalert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SucessalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
