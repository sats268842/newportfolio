import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Santhosh Thomas | Front End Web Developer";


  imageUrl = "https://santhoshporfolio.s3.ap-south-1.amazonaws.com/santhosh.jpg";
  site = "https://www.santhoshthomas.xyz/";
  author = "Santhosh Thomas";
  description = "A design-minded front-end software engineer focused on building beautiful interfaces & experiences. I\' m currently pursuing Computer Science and Engineering from APJ Abdul Kalam Technological University. As a software engineer, I enjoy bridging the gap between engineering and design combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.";

 constructor(private metaTagService: Meta,
             private titleService: Title
            ){
              console.log(AOS);
            }

 ngOnInit(): void {
  AOS.init();
  this.titleService.setTitle(this.title);

  this.metaTagService.addTags([

    // <!-- Primary Meta Tags -->
    { name: 'keywords', content: 'Angular SEO Integration, Angular, Bootstrap, Html, CSS, Portfolio, Developer, Designer, UI, UX, Freelancer, Indian, Kerala, Student, Adoor, santhosh, thomas, graphic design, web design, website builder, adobe, photoshop, illustrator, flutter, app, firebase, html, css, sjcet, palai, santhosh thomas, web, hacker, figma, XD, sketch, UI, UX, Prototype, Freelancer, backend, frontend, web developer, Product Desinger, Kottayam, AWS, santhosh_thomas, santhosh developer, santhosh sjcet, santhosh adoor, SJCET PALAI, SJCET, SANTHOSH THOMAS, Santhosh Thomas Sjcet, Santhosh Thomas Adoor, Santhosh Thomas Angular, Santhosh Thomas Flutter, Santhosh Thomas, portfolio, santhosh portfolio, santhosh thomas portfolio, web developer roadmap 2020, Flutter, Angular, angular 9, Kerala, Santhosh Kerala, Santhosh Thomas Kerala, Santhosh Palai, Santhosh Adoor, Santhosh Thomas Adoor,Santhosh Thomas Developer, Santhosh Thomas Angular Developer, SJCET, KTU, SEO, Santhosh Web Developer, Santhosh Angular, India, Life Experience, sats268842'},
    {name: 'description', content: this.description},
    { name: 'author', content: this.author },
    { name: 'owner', content: this.author },
    { name: 'creator', content: this.author },
    { name: 'Copyright', content: this.author },
    { name: 'title', content: this.author },
    {name: 'robots', content: 'index, follow'},
    {name: 'image', content: this.imageUrl},
    // { name: 'viewport', content: "width=device-width, initial-scale=1" },
    // { charset: "UTF-8"},

    // <!-- Twitter -->
    { property: 'twitter:card', content: "summary_large_image" },
    { property: 'twitter:site', content: this.site },
    { property: 'twitter:title', content: this.author },
    { property: 'twitter:description', content: this.description },
    { property: 'twitter:creator', content: this.author },
    { property: 'twitter:image',  itemprop: 'image' ,content: this.imageUrl },
    { property: ' twitter:description', content: this.description },

     //  <!-- Open Graph / Facebook -->
    // { property: 'og:type', content: 'website' },
    { property: 'og:url', content: this.site },
    { property: 'og:type', content: "website"},
    { property: 'og:title', content: this.author },
    { property: 'og:description', content: this.description },
    { property: 'og:image',  itemprop: 'image', content: this.imageUrl },

  ]);
}

}
