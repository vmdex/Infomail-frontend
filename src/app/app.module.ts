import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {EmailFormComponent} from "./components/emailForm/email-form.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ChipsModule} from "primeng/chips";
import {InputSwitchModule} from "primeng/inputswitch";
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {MainPageComponent} from './components/main-page/main-page.component';
import {PageHeadComponent} from './components/page-head/page-head.component';
import {MenubarModule} from "primeng/menubar";
import {LogInFormComponent} from './components/log-in-form/log-in-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    WelcomePageComponent,
    MainPageComponent,
    PageHeadComponent,
    LogInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ButtonModule,
    DialogModule,
    ChipsModule,
    InputSwitchModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
