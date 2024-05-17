import { Component } from '@angular/core';
import { JitComponent } from '../jit/jit.component';
import { KpiComponent } from '../kpi/kpi.component';
import { StockAvailabilityComponent } from '../stock-availability/stock-availability.component';
import { OnTimeDeliveryComponent } from '../on-time-delivery/on-time-delivery.component';


@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [JitComponent,KpiComponent,StockAvailabilityComponent,OnTimeDeliveryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
