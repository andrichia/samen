import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'samen', loadChildren: './samen/samen.module#SamenPageModule' },
  { path: 'samen/ronda', loadChildren: './samen/ronda/ronda.module#RondaPageModule' },
  { path: 'samen/event', loadChildren: './samen/event/event.module#EventPageModule' },
  { path: 'samen/lapor', loadChildren: './samen/lapor/lapor.module#LaporPageModule' },
  { path: 'samen/inventaris', loadChildren: './samen/inventaris/inventaris.module#InventarisPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'samen/event/add-event', loadChildren: './samen/event/add-event/add-event.module#AddEventPageModule' },
  { path: 'samen/event/update-event', loadChildren: './samen/event/update-event/update-event.module#UpdateEventPageModule' },
  { path: 'samen/event/delete-event', loadChildren: './samen/event/delete-event/delete-event.module#DeleteEventPageModule' },
  { path: 'samen/ronda/add-ronda', loadChildren: './samen/ronda/add-ronda/add-ronda.module#AddRondaPageModule' },
  { path: 'samen/ronda/update-ronda', loadChildren: './samen/ronda/update-ronda/update-ronda.module#UpdateRondaPageModule' },
  { path: 'samen/ronda/delete-ronda', loadChildren: './samen/ronda/delete-ronda/delete-ronda.module#DeleteRondaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
