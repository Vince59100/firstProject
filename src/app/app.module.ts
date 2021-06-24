import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VoitureComponent } from './voiture/voiture.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
