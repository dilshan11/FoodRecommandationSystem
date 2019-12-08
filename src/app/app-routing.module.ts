import { NgModule } from '@angular/core';
 
import { Routes, RouterModule } from '@angular/router';
import { FristpageComponent } from './fristpage/fristpage.component';
import { StdashboardsComponent } from './students/stdashboards/stdashboards.component';
import { ShopdashboardComponent } from './shop/shopdashboard/shopdashboard.component';
import { NewsComponent } from './students/news/news.component';
import { MealhomeComponent } from './shop/mealhome/mealhome.component';
import { HomeComponent } from './shop/home/home.component';
import { DashComponent } from './students/dash/dash.component';

const routes: Routes = [
  {
    path:'ipa',
    component:FristpageComponent
},
{
  path:'stdashboard',
  component:StdashboardsComponent,
  children:[
    { path: '',  redirectTo: 'dash', pathMatch: 'full' },
    {path:'dash',
    component:DashComponent
  },
    {
      path:'news',
      component:NewsComponent
    },
  
  ]
},
{
  path:'shdashboard',
  component:ShopdashboardComponent,
    children:[
      { path: '',  redirectTo: 'mealhome', pathMatch: 'full' },
      {
        path:'mealhome',
        component:MealhomeComponent,
          
      },
      {path:'home/:id',
      component:HomeComponent
    }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
