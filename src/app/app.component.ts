import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Santhosh Thomas | Front End Web Developer";


  imageUrl = "http://santhoshthomas.xyz/assets/images/profilepic.jpg";
  site = "http://santhoshthomas.xyz/";
  author = "Santhosh Thomas";
  description = "A design-minded front-end software engineer focused on building beautiful interfaces & experiences. I\' m currently pursuing Computer Science and Engineering from APJ Abdul Kalam Technological University. As a software engineer, I enjoy bridging the gap between engineering and design combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.";

 constructor(private metaTagService: Meta,
             private titleService: Title
            ){ }

 ngOnInit(): void {
  this.titleService.setTitle(this.title);

}

}
