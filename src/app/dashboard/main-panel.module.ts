import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

const routes: Routes = [
  {
    path: '',
    component: MainPanelComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'list',
        component: TaskboardComponent
      },
      {
        path: 'appointment',
        component: AppointmentComponent
      }]
  }]

@NgModule({
  declarations: [
    DashboardComponent,
    LeftPanelComponent,
    TaskboardComponent,
    MainPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MainPanelModule { }
