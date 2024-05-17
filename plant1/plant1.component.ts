import { Component } from '@angular/core';
import { DashboardPlant1Component } from "../dashboard-plant1/dashboard-plant1.component";
import { LogisticsPlant1Component } from "../logistics-plant1/logistics-plant1.component";
import { PlantLayoutPlant1Component } from "../plant-layout-plant1/plant-layout-plant1.component";
import { CriticalSuppliersPlant1Component } from "../critical-suppliers-plant1/critical-suppliers-plant1.component";



@Component({
    selector: 'plant1',
    standalone: true,
    templateUrl: './plant1.component.html',
    styleUrl: './plant1.component.scss',
    imports: [DashboardPlant1Component, LogisticsPlant1Component, PlantLayoutPlant1Component, CriticalSuppliersPlant1Component]
})
export class Plant1Component {

}
