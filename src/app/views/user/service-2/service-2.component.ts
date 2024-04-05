import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageService } from '@app/services/image.service';
import { ModalPhotoComponent } from '@app/shared/components/modal-photo/modal-photo.component';
@Component({
  selector: 'app-service-2',
  templateUrl: './service-2.component.html',
  styleUrls: ['./service-2.component.scss']
})
export class Service2Component {

  public photoList = [
    { photo: this.imageService.service_3_1 },
    { photo: this.imageService.service_3_2 },
    { photo: this.imageService.service_3_3 },
    { photo: this.imageService.service_3_4 },
    { photo: this.imageService.service_3_5 },
    { photo: this.imageService.service_3_6 },
    { photo: this.imageService.service_3_7 },
    { photo: this.imageService.service_3_8 },
  ];

  constructor(
    public imageService: ImageService,
    public dialog: MatDialog
  ) {}

  public showModal(photo: any) {
    const dialog = this.dialog.open(ModalPhotoComponent, { data: photo })
  }

}
