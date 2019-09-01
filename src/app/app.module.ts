import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Templates 
import { TempNavComponent } from './template/temp-nav/temp-nav.component';
import { TempRodComponent } from './template/temp-rod/temp-rod.component';

// Componentes
import { AppHomeComponent } from './components/app-home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TempNavComponent,
    TempRodComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
