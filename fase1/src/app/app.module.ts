import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Ensure this is correctly imported
import { AppComponent } from './app.component'; // Ensure this is correctly imported
import { LoginComponent } from './login/login.component'; // Ensure all components are correctly imported
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { ChannelManagementComponent } from './channel-management/channel-management.component';

@NgModule({
  declarations: [
    AppComponent, // Ensure AppComponent is declared here
    LoginComponent,
    AccountComponent,
    ProfileComponent,
    DashboardComponent,
    GroupManagementComponent,
    ChannelManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Ensure AppRoutingModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent] // Ensure AppComponent is the bootstrap component
})
export class AppModule { }
