import { Component } from '@angular/core';
import { RuchaLComponent } from '../rucha-l/rucha-l.component';
import { RajsriyaLComponent } from '../rajsriya-l/rajsriya-l.component';
import { MetalmanLComponent } from '../metalman-l/metalman-l.component';
import { SandharLComponent } from '../sandhar-l/sandhar-l.component';

@Component({
  selector: 'logistics',
  standalone: true,
  imports: [RuchaLComponent,RajsriyaLComponent,MetalmanLComponent,SandharLComponent],
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.scss'
})


export class LogisticsComponent {

}
