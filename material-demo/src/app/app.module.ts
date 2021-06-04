import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import support for Angular animations in the browser:
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Add checkboxes + radio buttons from Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
// Add Inputs from Angular Material
import { MatInputModule } from '@angular/material/input';
// Add drop-down lists from Angular Material
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
