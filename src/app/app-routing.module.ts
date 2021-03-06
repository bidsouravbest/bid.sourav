import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';



const routes: Routes = [
  { path: '', redirectTo:'/departments', pathMatch:'full' },
  { path: 'departments', component:DepartmentListComponent },
  { path: 'departments/:id', 
    component:DepartmentDetailComponent,
    children: [
      { path: 'overview', component:DepartmentOverviewComponent },
      { path: 'contact', component:DepartmentContactComponent }
    ] 
  },
  { path: 'employees', component:EmployeeListComponent },
  { path: "**", component:NoPageFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [DepartmentListComponent, EmployeeListComponent];
