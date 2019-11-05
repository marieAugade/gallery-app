import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  public modalRef: BsModalRef;
   // snapshots taken
   public webcamImages: WebcamImage[] = [];

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImages.push(webcamImage);
    this.modalRef.hide();
  }

}
