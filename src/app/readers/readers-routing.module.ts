import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadersComponent } from './readers.component';

const routes: Routes = [
  {
    path: 'readers',
    component: ReadersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadersRoutingModule { }
