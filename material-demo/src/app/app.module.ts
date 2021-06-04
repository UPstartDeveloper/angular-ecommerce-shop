import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import support for Angular animations in the browser:
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Add checkboxes from Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
