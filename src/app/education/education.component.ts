import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  formations = [
    {
      titre:"Master en IA et Big Data",
      date:"2025",
      desc:"Ecole Supérieure Polytechnique",
      couleur:"#FBCA3E"
    },
    {
      titre:"Licence en développement d'application répartie",
      date:"2023",
      desc:"École Supérieure Multinationale Des Télécommunications (ESMT)",
      couleur:"#41516C"
    },
  ]
  certifs = [
    {
      titre : "AWS Certified Cloud Practitioner",
      date : "2024",
      couleur:"#E24A68",
    },
    {
      titre : "Oracle certification in Database Programming with PL/SQL",
      date : "2024",
      couleur:"#1B5F8C",
    },
    {
      titre : "Formation en Data Science pour l'agriculture",
      date : "2024",
      couleur:"#4CADAD",
    },

  ]
}
