import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FiveComponent,
    SixComponent,
    SevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
