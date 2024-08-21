import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/header/header.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ResumeComponent } from './modules/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
