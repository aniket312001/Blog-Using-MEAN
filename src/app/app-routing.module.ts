import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherUserComponent } from './another-user/another-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyPostComponent } from './my-post/my-post.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"setting",component:SettingComponent},
  {path:"newpost",component:PostComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"mypost",component:MyPostComponent},
  {path:"update/:id",component:PostComponent},
  {path:"post/:id",component:SinglePostComponent},
  {path:"user/:id",component:AnotherUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
