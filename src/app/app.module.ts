import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgressbarComponent } from './ui/progressbar/progressbar.component';
import { FooterComponent } from './ui/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationTimelineComponent } from './ui/education-timeline/education-timeline.component';
import { ExperienceTimelineComponent } from './ui/experience-timeline/experience-timeline.component';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressbarComponent,
    FooterComponent,
    EducationTimelineComponent,
    ExperienceTimelineComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgsRevealModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    LayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
