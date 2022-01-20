import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { NopageComponent } from './nopage/nopage.component';
import { NamerPipe } from './namer.pipe';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginpageComponent,
    SignupComponent,
    AboutComponent,
    NopageComponent,
    NamerPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
