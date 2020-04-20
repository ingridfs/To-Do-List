import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { MainViewComponent } from './components/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }