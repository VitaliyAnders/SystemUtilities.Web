import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { SystemProcessesComponent } from './component/system-processes/system-processes.component';

import { SystemProcessesHttpService } from './service/system-processes-http.service';


@NgModule({
  declarations: [
    AppComponent,
    SystemProcessesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToasterModule.forRoot()
  ],
  providers: [SystemProcessesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
