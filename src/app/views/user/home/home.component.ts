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

  public images = [
    'https://i.pinimg.com/736x/06/d0/53/06d053c072330789fd46bda08d1b40c3.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7DU8s0HLjofOLC7Zpr3ywED6UaTqJ1XOywQt2as9DNMqro1ccwR0j-CNnAavr43YmoN5n2uJbCp24dl7slRW8ccOoh3xaYThdn_EnWduocSqWL-WZ2pDPrlDsML_9Dbe1FNe2M_PokZVQ/s1600/-consultorio-medico-fiateci-business.jpg',
    'https://fotos.vivadecora.com.br/decoracao-clinica-mesa-com-cavaletes-bgarquitetura-162935-proportional-height_cover_medium.jpg',
    'https://soluzionegestaodeclinicas.com.br/wp-content/uploads/2019/11/decora%C3%A7%C3%A3o-de-cl%C3%ADnica-medica-ilustra%C3%A7%C3%A3o-e1574084732420.jpg',
    'https://clinicademilhoes.com/wp-content/uploads/2023/02/clinica-de-estetica-renata-rossi-8-980x550.jpg',
    'https://omunicipioblumenau.com.br/wp-content/uploads/2022/06/gustavo-siqueira-consultorio-medico-em-balneario-camboriu-tem-pegada-chic-mas-sem-excessos-whatsapp-image-2022-06-21-at-12.19.49-1.jpeg',
  ]

  constructor(
    public imageService: ImageService,
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
    let position: any = el?.getBoundingClientRect();
    /* el?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    }); */

    window.scrollTo({
      top: position.top + window.scrollY - 40,
      left: position.left,
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
