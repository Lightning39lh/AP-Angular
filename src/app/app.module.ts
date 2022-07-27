import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { LinksComponent } from './components/links/links.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectService } from './services/proyect.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortfoilComponent } from './components/portfoil-edit/portfoil-edit.component';
import { InterceptorService } from './services/interceptor.service';
import { PortfoilShowComponent } from './components/portfoil-show/portfoil-show.component';
import { AboutMeShowComponent } from './components/about-me-show/about-me-show.component';
import { BannerShowComponent } from './components/banner-show/banner-show.component';
import { EducationShowComponent } from './components/education-show/education-show.component';
import { ExperienceShowComponent } from './components/experience-show/experience-show.component';
import { HeaderShowComponent } from './components/header-show/header-show.component';
import { LinksShowComponent } from './components/links-show/links-show.component';
import { ProyectsShowComponent } from './components/proyects-show/proyects-show.component';
import { SkillsShowComponent } from './components/skills-show/skills-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSrcModule } from 'ng-src';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    LinksComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    LoginComponent,
    PortfoilComponent,
    PortfoilShowComponent,
    AboutMeShowComponent,
    BannerShowComponent,
    EducationShowComponent,
    ExperienceShowComponent,
    HeaderShowComponent,
    LinksShowComponent,
    ProyectsShowComponent,
    SkillsShowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    AlifeFileToBase64Module,
    BrowserAnimationsModule,
    NgSrcModule
  ],
  providers: [ProyectService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
