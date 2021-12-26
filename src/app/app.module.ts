import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { MyPostComponent } from './my-post/my-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AnotherUserComponent } from './another-user/another-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    PostComponent,
    HomeComponent,
    MyPostComponent,
    SinglePostComponent,
    AnotherUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
