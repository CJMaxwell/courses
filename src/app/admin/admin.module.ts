import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  // exports: [AdminComponent]
})
export class AdminModule { }
