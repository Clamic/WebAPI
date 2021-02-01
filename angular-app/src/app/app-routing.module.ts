import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientViewerComponent } from './core/client-viewer/client-viewer.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { PurchaseComponent } from './core/purchase/purchase.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'clients', component: ClientViewerComponent },
  { path: 'purchase', component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
