import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconService } from 'src/app/core/services/material-icon.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [MatIconModule, HttpClientModule],
  providers: [MatIconService, MatIconRegistry],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  accountType = "cuenta personal"
  userName = "Luis Alvarado"
  userCode = "5605"
  portolioCurrency = "PEN"
  userSavingAmount = "S/ 125,528.87"
  constructor(
    private service: MatIconService,
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
  ) {
    this.service.registerSvgIcons(this.matIconRegistry, this.domSanitizer);
   }
}
