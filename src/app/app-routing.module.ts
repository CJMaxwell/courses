import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';

const appRoutes: Routes = [
  { path: '', component: CoursesComponent, pathMatch: 'full' },

  // Feature module
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  // Lazy loading
  {
    path: 'app',
    loadChildren: () => import('./readers/readers.module').then(m => m.ReadersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
