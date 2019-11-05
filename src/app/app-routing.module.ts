import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
