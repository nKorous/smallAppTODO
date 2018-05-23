import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Imports
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatDatepickerModule, MatDividerModule } from '@angular/material';

//Others
import { GetInfoComponent } from './get-info/get-info.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './error/pagenotfound.component'


@NgModule({
  declarations: [
    AppComponent,
    GetInfoComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    //Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
