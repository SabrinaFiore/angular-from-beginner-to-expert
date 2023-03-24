import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeEventsComponent } from './components/nativeEvents/native-events.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TruncatePipe } from './components/pipe/truncatePipe';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { HttpClientModule } from "@angular/common/http";
import { SwitchComponent } from './components/switch/switch.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NativeEventsComponent,
    DirectivesComponent,
    PipeComponent,
    TruncatePipe,
    InterfacesComponent,
    HttpRequestComponent,
    SwitchComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
