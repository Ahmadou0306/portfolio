import { Component, Inject, PLATFORM_ID} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    HomeComponent, 
    EducationComponent, 
    ContactComponent, 
    AboutComponent, 
    ProjectsComponent, 
    SkillsComponent, 
    ContactComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Mon Portofolio';
  navItems = [
    { id: 'home', name: 'Accueil' },
    { id: 'about', name: 'À Propos' },
    { id: 'education', name: 'Education' },
    { id: 'projects', name: 'Projets' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];
  activeLink: string ;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.activeLink = 'home'; // Définissez ici la valeur par défaut

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!window.location.hash) {
        window.location.hash = '#home';
      }
        this.activeLink = window.location.hash.substring(1);
  
      window.addEventListener('hashchange', () => {
        this.activeLink = window.location.hash.substring(1);
      });
      
    }
  }


  
}
