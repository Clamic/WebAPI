import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ClientViewerComponent } from './client-viewer/client-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, DashboardComponent, PurchaseComponent, ClientViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    DashboardComponent,
    PurchaseComponent,
    ClientViewerComponent
  ]
})
export class CoreModule { }
