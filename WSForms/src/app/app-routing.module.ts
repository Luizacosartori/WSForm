import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { MassageFormComponent } from './massage-form/massage-form.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from './auth-guard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'notes', component: NotesFormComponent, canActivate:[AuthGuard] },
  { path: 'massageForm', component: MassageFormComponent, canActivate:[AuthGuard] },
  { path: 'massageForm/:id', component: MassageFormComponent, canActivate:[AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
