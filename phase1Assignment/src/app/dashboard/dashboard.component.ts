import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {}

