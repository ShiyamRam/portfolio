import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ResumeComponent } from './modules/resume/resume.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HeaderComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
