import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationAndExpComponent } from './education-and-exp/education-and-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkSampleComponent } from './work-sample/work-sample.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    EducationAndExpComponent,
    SkillsComponent,
    WorkSampleComponent,
    ContactMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
