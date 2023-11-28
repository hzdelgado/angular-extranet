import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { MatIconService } from '../../services/material-icon.service';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [MatIconModule, HttpClientModule, CommonModule],
  providers: [MatIconService, MatIconRegistry]
})
export class NavbarComponent {
  profileActionTitle = "Ver Cuenta"
  userFullName = "Luis Alvarado"
  userVerified = true
  constructor(
    private service: MatIconService,
    public sidebarService: SidebarService,
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
  ) {
    this.service.registerSvgIcons(this.matIconRegistry, this.domSanitizer);
   }
}
