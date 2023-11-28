import { Component } from '@angular/core';
import { CATEGORY_OPTIONS } from '../../constants/category-option';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconService } from '../../services/material-icon.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  providers: [MatIconService, MatIconRegistry]
})
export class MenuBarComponent {
  userName = "Luis Alvarado"
  categories = CATEGORY_OPTIONS
  constructor(
    private service: MatIconService,
    public sidebarService: SidebarService,
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
  ) {
    this.service.registerSvgIcons(this.matIconRegistry, this.domSanitizer);
   }
  
}
