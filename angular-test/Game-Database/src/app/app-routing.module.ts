import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:game-search/p/:page',
    component: HomeComponent,
  },
  {
    path: 'p/:page',
    component: HomeComponent,
  },
  {
    path: 'p/:page/s/:ordering',
    component: HomeComponent,
  },
  {
    path: 'search/:game-search/p/:page/s/:ordering',
    component: HomeComponent,
  },
  {
    path: 's/:ordering',
    component: HomeComponent,
  },
  {
    path: 'search/:game-search',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'data',
    component: DataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
