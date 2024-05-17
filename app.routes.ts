import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { PlantLayoutComponent } from './plant-layout/plant-layout.component';
import { CriticalSuppliersComponent } from './critical-suppliers/critical-suppliers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { Plant1Component } from './plant1/plant1.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'logistics',component:LogisticsComponent},
    {path:'plantlayout',component:PlantLayoutComponent},
    {path:'criticalsuppliers',component:CriticalSuppliersComponent},
    {path:'user',component:UserComponent},    
    {path:'plant1',component:Plant1Component},
    
    {path:'**',component:PageNotFoundComponent}
];
