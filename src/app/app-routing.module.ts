import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';

const routes: Routes = [
  { path: 'friends', component: FriendsComponent },
  { path: 'dashboard', component: DashboardComponent },
  //semi colon to indicate placeholder for a specific friend id
  { path: 'detail/:id', component: FriendDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
