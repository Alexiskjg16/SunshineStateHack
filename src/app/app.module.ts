import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';


const routes: Routes = [
  { path: 'team-component', component: TeamComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'news-component', component: NewsComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'donate-component', component: DonateComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AboutComponent,
    NewsComponent,
    HomeComponent,
    DonateComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
