import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '@app/services/image.service';
import { ScrollService } from '@app/services/scroll.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public photo = this._imageService.photo;
  public logo = this._imageService.logo;
  public whatsapp = this._imageService.whatsapp;
  initial!: HTMLElement;
  treatment!: HTMLElement;

  constructor(
    private _imageService: ImageService,
    private _scrollService: ScrollService,
    public router: Router
  ){}

  public scroll(value: string) {

    const current = this.router.url;

    if(current !== '/') {
      this.router.navigate(['/']);
      this._scrollService.scrollValue = value
    } else {
      this._scrollService.scrollValue = value
    }
  }

  public redirect() {
    window.open('https://wa.me/5519982456699', '_blank')
  }

}
