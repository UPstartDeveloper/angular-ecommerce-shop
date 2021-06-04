import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import support for Angular animations in the browser:
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Add checkboxes + radio buttons from Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
