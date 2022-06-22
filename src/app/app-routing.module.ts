import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventsComponent } from './pages/events/events.component';
import { CriarEventoComponent } from './pages/criar-evento/criar-evento.component';
import { UpdateEventComponent } from './pages/update-event/update-event.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'events', component:EventsComponent},
  {path:'criar-eventos', component:CriarEventoComponent},
  {path:'update-event', component:UpdateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
