import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ImageService } from '@app/services/image.service';
import { ScrollService } from '@app/services/scroll.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked{


  public photo = this._imageService.photo;
  public whatsapp = this._imageService.whatsapp;
  public instagram = this._imageService.instagram;
  public facebook = this._imageService.facebook;
  public scrollValue: any = '';

  public c1 = this._imageService.c1;
  public c2 = this._imageService.c2;
  public c3 = this._imageService.c3;
  public c4 = this._imageService.c4;

  public serviceList = [
    {
      name: 'PREENCHIMENTO LABIAL',
      description: 'O preenchimento labial é realizado por meio do ácido hialurônico, aplicado em diferentes áreas dos lábios para aumentar o volume, definir o contorno ou corrigir assimetrias.',
      path: 'preenchimento-labial'
    },
    {
      name: 'TOXINA BOTULÍNICA',
      description: 'A toxina botulínica age bloqueando temporariamente os sinais nervosos que causam a contração dos músculos faciais. Isso relaxa os músculos e suaviza as rugas e linhas de expressão que são formadas pela repetida contração muscular ao longo do tempo. ',
      path: '/toxina-butulinica'
    },
    {
      name: 'ÁCIDO HIALURÔNICO',
      description: 'O ácido hialurônico é utilizado na harmonização facial para promover resultados naturais,  mantendo os contornos faciais, oferecendo uma aparência rejuvenescida e equilibrada, realçando a beleza individual de cada paciente.',
      path: '/acido-hialuronico'
    },
    {
      name: 'LASER LAVIEEN',
      description: 'O Laser LaVieen é um tratamento estético que utiliza luz laser para rejuvenescer a pele. Ele estimula a produção de colágeno e elastina, melhorando a elasticidade da pele, suavizando rugas e linhas finas, além de tratar manchas e melhorar a textura geral da pele, resultando em uma aparência mais jovem e saudável.',
      path: '/laser-lavieen'
    }
  ]

  constructor(
    private _imageService: ImageService,
    private _scrollService: ScrollService,
    private scroller: ViewportScroller
  ) { }

  ngAfterViewChecked(): void {
    this.scrollValue = this._scrollService.scrollValue
    this.scroll(this.scrollValue)
  }

  ngOnInit(): void {

  }

  public scroll(id: any) {
    let el = document.getElementById(id);

    el?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }

  public redirect() {
    window.open('https://wa.me/5519982456699', '_blank')
  }

  public openAnother(path: string) {
    window.open(path, '_blank')
  }

}
