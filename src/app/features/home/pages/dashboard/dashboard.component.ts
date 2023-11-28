import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [SidebarComponent, NavbarComponent],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public sidebarService: SidebarService) {}
}
