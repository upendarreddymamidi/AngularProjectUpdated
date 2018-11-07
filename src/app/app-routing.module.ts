import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute} from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: 'users', component: UsersComponent},
  { path: 'users/{{user.id}}', component: UsersComponent},

  { path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [ 
    UsersComponent, PostsComponent
  ];
}
