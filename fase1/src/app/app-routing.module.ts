import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { ChannelManagementComponent } from './channel-management/channel-management.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: AccountComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'group-management', component: GroupManagementComponent },
  { path: 'channel-management', component: ChannelManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure RouterModule is imported and routes are defined
  exports: [RouterModule] // Ensure RouterModule is exported
})
export class AppRoutingModule { }
