import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-timeline',
  templateUrl: './education-timeline.component.html',
  styleUrls: ['./education-timeline.component.scss']
})
export class EducationTimelineComponent implements OnInit {

  constructor() { }

  education = [
    {
      year: '2017 - 2021',
      cousre: 'Computer Science & Engineering',
      school: 'St. Joseph\'s College of Engineering <br> and Technology, Palai',
    },
    {
      year: '2015 - 2017',
      cousre: 'Higher Secondary',
      school: 'Holy Angels English Medium <br/> Higher Secondary School<br>Adoor',
    },
    {
      year: '2015',
      cousre: 'CBSE',
      school: 'All Saints Public School & <br>Junior College (CBSE)<br>Adoor',
    }
  ]

  ngOnInit(): void {
  }

}
