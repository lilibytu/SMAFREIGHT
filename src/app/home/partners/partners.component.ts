import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners = [{
    id: 1,
    src: 'assets/partners/FATTA.png',
    alt: 'assets/partners/FATTA.png',
    link: 'https://www.tawa.go.tz/',
  }, {
    id: 2,
    src: 'assets/partners/fiata.png',
    alt: 'assets/partners/fiata.png',
    link: 'https://www.tawa.go.tz/',
  }, {
    id: 3,
    src: 'assets/partners/Tasac.png',
    alt: 'assets/partners/Tasac.png',
    link: 'https://www.tanzaniaparks.go.tz/',
  }, {
    id: 4,
    src: 'assets/partners/trac.jpeg',
    alt: 'assets/partners/trac.jpeg',
    link: 'https://www.tripadvisor.com/',
  }, {
    id: 5,
    src: 'assets/partners/Acacia.jpg',
    alt: 'assets/partners/Acacia.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  }, {
    id: 6,
    src: 'assets/partners/Statoil.jpg',
    alt: 'assets/partners/Statoil.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  }, {
    id: 7,
    src: 'assets/partners/Anglogold.jpg',
    alt: 'assets/partners/Anglogold.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  }, {
    id: 8,
    src: 'assets/partners/glca.jpeg',
    alt: 'assets/partners/glca.jpeg',
    link: 'https://www.safaribookings.com/',
  }];

  customOptions: OwlOptions = {
    // autoWidth: true,
    loop: true,
    // items: '10',
    // margin: 10,
    // slideBy: 'page',
    // merge: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    dotsSpeed: 500,
    autoplayMouseleaveTimeout: 5000,
    // dots: false,
    // dotsData: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    smartSpeed: 400,
    // fluidSpeed: 499,
    dragEndSpeed: 350,
    // dotsEach: 4,
    // center: true,
    // rewind: true,
    // rtl: true,
    // startPosition: 1,
    // navText: [ '<i class=fa-chevron-left>left</i>', '<i class=fa-chevron-right>right</i>' ],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 6
      },
      1368: {
        items: 6
      },
      1920: {
        items: 6
      }
    },
    // stagePadding: 40,
    nav: true
  };
  activeSlides: any;

  constructor() {
  }

  ngOnInit(): any {

  }

  getPassedData(dataSlide: any): any {
    this.activeSlides = dataSlide;
    // console.log(this.activeSlides);
  }

  openPartnersWebsite(websiteUrl: string | undefined): void {
    // @ts-ignore
    window.open(websiteUrl, '_blank').focus();
  }

}
