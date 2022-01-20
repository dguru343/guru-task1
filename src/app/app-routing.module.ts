import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', component: NopageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
