import { Component } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatIconService } from 'src/app/core/services/material-icon.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, UserInfoComponent, DatePipe],
  providers: [MatIconService, MatIconRegistry],
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent {
  currentDate = new Date()
  amount = "S/ 125,528.87"
  investmentFundAmount = "S/ 50,000.00"
  mutualFundAmount = "S/ 65,528.87"
  constructor(
    private service: MatIconService,
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
  ) {
    this.service.registerSvgIcons(this.matIconRegistry, this.domSanitizer);
   }
}
