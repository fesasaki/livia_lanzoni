import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageService } from '@app/services/image.service';
import { ModalPhotoComponent } from '@app/shared/components/modal-photo/modal-photo.component';

@Component({
  selector: 'app-service-1',
  templateUrl: './service-1.component.html',
  styleUrls: ['./service-1.component.scss']
})
export class Service1Component {

  public photoList = [
    { photo: this.imageService.service_2_1 },
    { photo: this.imageService.service_2_2 },
    { photo: this.imageService.service_2_3 },
    { photo: this.imageService.service_2_4 },
    { photo: this.imageService.service_2_5 },
    { photo: this.imageService.service_2_6 },
    { photo: this.imageService.service_2_7 },
    { photo: this.imageService.service_2_8 },
    { photo: this.imageService.service_2_9 },
    { photo: this.imageService.service_2_10 },
    { photo: this.imageService.service_2_11 },
    { photo: this.imageService.service_2_12 },
    { photo: this.imageService.service_2_13 },
    { photo: this.imageService.service_2_14 },
    { photo: this.imageService.service_2_15 },
    { photo: this.imageService.service_2_16 },
    { photo: this.imageService.service_2_17 },
    { photo: this.imageService.service_2_18 },
    { photo: this.imageService.service_2_19 },
  ];

  constructor(
    public imageService: ImageService,
    public dialog: MatDialog
  ) {}

  public showModal(photo: any) {
    const dialog = this.dialog.open(ModalPhotoComponent, { data: photo })
  }

}
