import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { NewEventComponent } from './new-event/new-event.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events/all',
    pathMatch: 'full'
  },
  {
    path: 'events/all',
    component: EventsComponent
  },
  {
    path: 'events/',
    redirectTo: '/events/all'
  },
  {
    path: 'events/liked',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'events/newEvent',
    component: NewEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
