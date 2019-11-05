import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html'
})
export class CameraComponent implements OnInit {

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = false;
  public errors: WebcamInitError[] = [];
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor() { }

  public ngOnInit(): void {
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
  }

  // triggered when pictures taken
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
