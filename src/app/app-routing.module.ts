import { NgModule } from '@angular/core';
 
import { Routes, RouterModule } from '@angular/router';
import { FristpageComponent } from './fristpage/fristpage.component';
import { StdashboardsComponent } from './students/stdashboards/stdashboards.component';
import { ShopdashboardComponent } from './shop/shopdashboard/shopdashboard.component';
import { NewsComponent } from './students/news/news.component';

const routes: Routes = [
  {
    path:'ipa',
    component:FristpageComponent
},
{
  path:'stdashboard',
  component:StdashboardsComponent,
  children:[
    {
      path:'news',
      component:NewsComponent
    }
  ]
},
{
  path:'shdashboard',
  component:ShopdashboardComponent,
    children:[
      {
        path:'news',
        component:NewsComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
