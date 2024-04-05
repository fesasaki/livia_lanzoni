import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.scss']
})
export class ModalPhotoComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

}
