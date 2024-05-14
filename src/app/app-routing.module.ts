import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationAndExpComponent } from './education-and-exp/education-and-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkSampleComponent } from './work-sample/work-sample.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'educationExp', component: EducationAndExpComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'workSample', component: WorkSampleComponent},
  {path: 'contact', component: ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
