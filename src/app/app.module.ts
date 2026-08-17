import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { LikesPipe } from './shared/pipes/likes.pipe';
import { PostLikesComponent } from './pages/posts/components/post-likes.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { PostDetailGuard } from './pages/posts/post-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PostsComponent,
    PostLikesComponent,
    LikesPipe,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      { path: 'posts', component: PostsComponent},
      { path: 'posts/:id',
        canActivate: [ PostDetailGuard ],
         component: PostDetailComponent},
      { path: 'welcome', component: HomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: "full"},
      {path: '**', redirectTo: 'welcome', pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
