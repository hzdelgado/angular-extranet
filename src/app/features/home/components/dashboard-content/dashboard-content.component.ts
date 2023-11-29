import { Component } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { CurrentPositionComponent } from '../current-position/current-position.component';
import { InvestmentFundComponent } from '../investment-fund/investment-fund.component';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [UserInfoComponent, CurrentPositionComponent, InvestmentFundComponent],
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent {

}
