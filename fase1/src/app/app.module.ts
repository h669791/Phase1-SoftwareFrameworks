import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { ChannelManagementComponent } from './channel-management/channel-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ProfileComponent,
    DashboardComponent,
    GroupManagementComponent,
    ChannelManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Ensure AppRoutingModule is listed here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
