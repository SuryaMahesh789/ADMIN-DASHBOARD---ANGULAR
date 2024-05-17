import { Component } from '@angular/core';
import { TrolleyAvailabilityComponent } from '../trolley-availability/trolley-availability.component';
import { P2FrameAndPaintStoresComponent } from '../p2-frame-and-paint-stores/p2-frame-and-paint-stores.component';
import { P2CkdStoresComponent } from '../p2-ckd-stores/p2-ckd-stores.component';
import { P1EngineStoresComponent } from '../p1-engine-stores/p1-engine-stores.component';
import { P2VehicleStoresComponent } from '../p2-vehicle-stores/p2-vehicle-stores.component';
import { P1VehicleStoresComponent } from '../p1-vehicle-stores/p1-vehicle-stores.component';
import { SecurityComponent } from '../security/security.component';
import { P2VehicleStores2Component } from '../p2-vehicle-stores2/p2-vehicle-stores2.component';
import { P2EngineStoresComponent } from '../p2-engine-stores/p2-engine-stores.component';
import { P2VehicleAndEngineStoresComponent } from "../p2-vehicle-and-engine-stores/p2-vehicle-and-engine-stores.component";


@Component({
    selector: 'plant-layout',
    standalone: true,
    templateUrl: './plant-layout.component.html',
    styleUrl: './plant-layout.component.scss',
    imports: [TrolleyAvailabilityComponent, P2FrameAndPaintStoresComponent, P2CkdStoresComponent, P1EngineStoresComponent, P2VehicleStoresComponent, P1VehicleStoresComponent, SecurityComponent, P2VehicleStores2Component, P2EngineStoresComponent, P2VehicleAndEngineStoresComponent]
})
export class PlantLayoutComponent {
  arr = new Array(378);
}
