import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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
        imageUrl: '../../assets/service1.png'
      },
      {
        name: 'UI/UX',
        description: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.',
        imageUrl: '../../assets/ux.png'
      },
      {
        name: 'WEB DEVELOPMENT',
        description: 'Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services.',
        imageUrl: '../../assets/code.png'
      },
      {
        name: 'GRAPHIC DESIGN',
        description: 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously.',
        imageUrl: '../../assets/pen.png'
      }
    ];


    works = [
      {
        name: 'Covid Tracker',
        url: 'https://covidtracker.santhoshthomas.xyz/',
        imageurl: '../../assets/covidtracke.png'
      },
      {
        name: 'Note App',
        url: 'https://scrapbook.santhoshthomas.xyz/',
        imageurl: '../../assets/scrapbook.png'
      },
      {
        name: 'Blog',
        url: 'https://blog.santhoshthomas.xyz/',
        imageurl: '../../assets/covidtracke.png'
      },
      {
        name: 'Old Portfolio',
        url: 'https://old.santhoshthomas.xyz/',
        imageurl: '../../assets/oldportfolio.png'
      }
    ];

  constructor() { }


  ngOnInit(): void {
  }

}
