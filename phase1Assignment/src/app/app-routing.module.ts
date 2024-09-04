import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelManagementComponent } from './channel-management/channel-management.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'group-management', component: GroupManagementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'channel-management', component: ChannelManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: AccountComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
