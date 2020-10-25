import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-timeline',
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.scss']
})
export class ExperienceTimelineComponent implements OnInit {

  constructor() { }

  experience = [
    {
      year: '2020 - 2021 ',
      role: 'Technical Lead',
      At: 'Developer Student Club, SJCET',
    },
    {
      year: '2020 - 2021',
      role: 'Design Lead',
      At: 'IEEE SB SJCET, PALAI',
    },
    {
      year: '2020 - 2021',
      role: 'Design Volunteer',
      At: 'IEEE KOCHI HUB',
    },
    {
      year: '2019 - 2020',
      role: 'Software Engineer Intern',
      At: 'The Software Works INC ',
    },
    {
      year: '2017',
      role: 'Volunteer',
      At: 'Kerala Police Cyberdome',
    },
  ];

  ngOnInit(): void {
  }


}
