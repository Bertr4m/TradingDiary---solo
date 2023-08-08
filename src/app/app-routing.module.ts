import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DiaryComponent } from './diary/diary.component';
import { LoginComponent } from './login/login.component';
import { WeeklyComponent } from './weekly/weekly.component';

const routes: Routes = [
  {path: '', redirectTo:'blog', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'diary', component: DiaryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'weekly', component: WeeklyComponent},
  {path: '**', redirectTo:'blog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
