import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageService } from '@app/services/image.service';
import { ModalPhotoComponent } from '@app/shared/components/modal-photo/modal-photo.component';

@Component({
  selector: 'app-service-4',
  templateUrl: './service-4.component.html',
  styleUrls: ['./service-4.component.scss']
})
export class Service4Component {

  public photoList = [
    { photo: this.imageService.service_1_1 },
    { photo: this.imageService.service_1_2 },
    { photo: this.imageService.service_1_3 },
    { photo: this.imageService.service_1_4 },
    { photo: this.imageService.service_1_5 },
    { photo: this.imageService.service_1_6 },
    { photo: this.imageService.service_1_7 },
    { photo: this.imageService.service_1_8 },
  ];

  constructor(
    public imageService: ImageService,
    public dialog: MatDialog
  ) {}

  public showModal(photo: any) {
    const dialog = this.dialog.open(ModalPhotoComponent, { data: photo })
  }

}
