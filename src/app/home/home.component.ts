import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import Swiper from 'swiper/bundle';
import { isPlatformBrowser } from '@angular/common';

import { PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public currentNumber: number = 1;
  browser: boolean =false;
	public example: any = null;
	public images: string[] = [
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606156551/portfolio/2cdb89107567489.5faa583a0b1ff_qvyinz.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606156580/portfolio/Untitled-1_fhx8bo.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606156825/portfolio/Bsafe_2_nwp7v7.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606156923/portfolio/f9b8f8107309159.5fa405e129ed7_fegtrz.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157076/portfolio/keynote_p20elq.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157084/portfolio/sdasf_zkhwsa.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157131/portfolio/problemstatement2final_bzhanr.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157131/portfolio/problemstatement8_glxin6.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157131/portfolio/problemstatement5_afnynq.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157131/portfolio/manojabharam_eringz.png',
    'https://res.cloudinary.com/www-santhoshthomas-xyz/image/upload/v1606157133/portfolio/hackpfinal2_vrgiix.png'
  ]
	public examples: any[] = [
		{
			title: 'Simple use',
			html: '<slider-carousel [images]="example.images"></slider-carousel>'
		},
		{
			title: 'With auto-size',
			html: '<slider-carousel [images]="example.images" [auto-size]="true"></slider-carousel>'
		},
		{
			title: 'With auto-size and max-width',
			html: '<slider-carousel [images]="example.images" [auto-size]="true" max-width="500px"></slider-carousel>'
		},
		{
			title: 'With fixed height and max-width',
			html: '<slider-carousel [images]="example.images" height="350px" max-width="600px"></slider-carousel>'
		}
	];
  constructor( @Inject(PLATFORM_ID) private platformId: Object) {
    // isPlatformBrowser(this.platformId)
    console.log(isPlatformBrowser(this.platformId))
    this.browser  =isPlatformBrowser(this.platformId)
    this.selectExample(1);
   }
	selectExample(number: number) {
		this.currentNumber = number;
		this.example = this.examples[this.currentNumber - 1];
	}
  isOpen = true;

  // tslint:disable-next-line: member-ordering

  skills = [
    {
      name: 'Angular',
      per: 75,
      icon: '<i class="fab fa-angular fa-2x has-text-primary"></i>'
     },
     {
      name: 'Flask',
      per: 60,
      icon: '<i class="fas fa-server fa-2x has-text-primary"></i>'
     },
     {
      name: 'Python',
      per: 40,
      icon: '<i class="fab fa-python  fa-2x has-text-primary"></i>'
     },
     {
      name: 'Adobe Photoshop',
      per: 70,
      icon: '<i class="fab fa-adobe fa-2x has-text-primary"></i>'
     },
     {
      name: 'Adobe XD',
      per: 40,
      icon: '<i class="fab fa-adobe fa-2x has-text-primary"></i>'
     },
    ];


    services = [
      {
        name: 'RESPONSIVE DESIGN',
        description: 'Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it ',
        imageUrl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/service1.png'
      },
      {
        name: 'UI/UX',
        description: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.',
        imageUrl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/ux.png'
      },
      {
        name: 'WEB DEVELOPMENT',
        description: 'Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services.',
        imageUrl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/code.png'
      },
      {
        name: 'GRAPHIC DESIGN',
        description: 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously.',
        imageUrl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/pen.png'
      }
    ];


    works = [
      {
        name: 'Covid Tracker',
        url: 'https://covidtracker.santhoshthomas.xyz/',
        imageurl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/covidtracke.png'
      },
      {
        name: 'Note App',
        url: 'https://scrapbook.santhoshthomas.xyz/',
        imageurl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/scrapbook.png'
      },
      {
        name: 'Blog',
        url: 'https://blog.santhoshthomas.xyz/',
        imageurl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/scrapbook.png'
      },
      {
        name: 'Old Portfolio',
        url: 'https://old.santhoshthomas.xyz/',
        imageurl: 'https://santhoshporfolio.s3.ap-south-1.amazonaws.com/oldportfolio.png'
      }
    ];

  toggle() {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }


  ngOnInit(): void {
    let mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      autoHeight: true,
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }


}
