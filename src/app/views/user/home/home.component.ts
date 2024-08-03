import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ImageService } from '@app/services/image.service';
import { ScrollService } from '@app/services/scroll.service';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {


  public photo = this.imageService.photo;
  public whatsapp = this.imageService.whatsapp;
  public instagram = this.imageService.instagram;
  public facebook = this.imageService.facebook;
  public scrollValue: any = '';

  public c1 = this.imageService.c1;
  public c2 = this.imageService.c2;
  public c3 = this.imageService.c3;
  public c4 = this.imageService.c4;

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

  public treatments = [
    {
      name: 'Blefaroplastia Estruturada',
      description: 'Blefaroplastia é uma cirurgia estética destinada a remover a pele enrugada e descaída das pálpebras superiores e/ou inferiores. À medida que a pessoa envelhece, a pele perde alguma da sua gordura e grande parte da sua elasticidade, tornando-se flácida e com rugas.'
    },
    {
      name: 'Blefaroplastia Superior e Inferior',
      description: 'A blefaroplastia superior e inferior são procedimentos cirúrgicos que visam melhorar a aparência dos olhos, tornando-os mais jovens e revitalizados. A blefaroplastia superior é focada nas pálpebras superiores, enquanto a blefaroplastia inferior trata das pálpebras inferiores e da área abaixo dos olhos.'
    }
  ]

  images: Array<any> = [
    this.imageService.c1,
    this.imageService.c2,
    this.imageService.c3,
    this.imageService.c4,
    this.imageService.c5,
    this.imageService.c6,
    this.imageService.c7,
    this.imageService.c8,
  ]


  constructor(
    public imageService: ImageService,
    private _scrollService: ScrollService,
    private scroller: ViewportScroller
  ) {}

  ngAfterViewChecked(): void {
    this.scrollValue = this._scrollService.scrollValue
    this.scroll(this.scrollValue)
  }

  ngOnInit(): void {

  }

  public scroll(id: any) {
    let el = document.getElementById(id);
    let position: any = el?.getBoundingClientRect();

    window.scrollTo({
      top: position?.top + window.scrollY - 50,
      left: position?.left,
      behavior: 'smooth'
    })
  }

  public redirect() {
    window.open('https://api.whatsapp.com/send/?phone=19971304004&text&type=phone_number&app_absent=0', '_blank')
  }

  public openAnother(path: string) {
    window.open(path, '_blank')
  }

}
