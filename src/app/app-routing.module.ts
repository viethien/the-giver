import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  { path: 'friends', component: FriendsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
