import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import {GifService} from './gif.service'

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
