import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeEventsComponent } from './components/nativeEvents/native-events.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TruncatePipe } from './components/pipe/truncatePipe';

@NgModule({
  declarations: [
    AppComponent,
    NativeEventsComponent,
    DirectivesComponent,
    PipeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
