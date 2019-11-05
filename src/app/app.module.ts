import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import {WebcamModule} from 'ngx-webcam';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './layout/header/header.component';
import { CameraComponent } from './features/gallery/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    CameraComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
