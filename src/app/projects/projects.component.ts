import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  imageUrl: string = 'assets/me.png'; 

  projects = [
    {
      titre:"SenSANTE",
      description:"Cette application web permet aux utilisateurs de prendre rendez-vous,  "+
      "obtenir des conseils et des ordonnances médicales en ligne. Les médecins peuvent gérer  "+
      "leurs patients et suivre leurs rendez-vous. Un système d'alerte par email assure le bon  "+
      "suivi des consultations. Un questionnaire alimenté par une IA effectue un pré-diagnostic  "+
      "et conseille les patients sur la nécessité de consulter un médecin. L'application facilite  "+
      "ainsi l'accès aux soins tout en optimisant la gestion médicale.",
      image:"assets/projects/sensante/sensante1.png",
    },
    {
      titre:"JAANG MII SCHOOL MANAGEMENT",
      description:"Cette application de bureau est dédiée à la gestion de la vie scolaire, "+
      "offrant une solution complète pour les établissements éducatifs. Elle permet notamment "+
      "de gérer efficacement les frais de scolarité, avec l'option de délivrer des reçus de paiement "+
      "automatisés. En outre, l'application simplifie la gestion des élèves en facilitant l'enregistrement  "+
      "et le suivi de leurs informations personnelles et scolaires, ainsi que l'organisation des notes pour  "+
      "chaque classe. Grâce à ses fonctionnalités intuitives, elle optimise le processus administratif et  "+
      "éducatif tout en réduisant les tâches manuelles.",
      image:"assets/projects/gestion_scolaire/gestion_scolaire3.png",
    },
    {
      titre:"E-Sport",
      description:"Cette application web de gestion d'événements sportifs permet aux utilisateurs de consulter  "+
      "les matchs à venir, d'acheter des billets via un système de paiement en ligne et de suivre les actualités  "+
      "sportives. L'administrateur gère les matchs, les tournois, les sanctions des joueurs, et veille au bon  "+
      "fonctionnement de l'application. Le community manager publie les actualités sportives, tandis que le trésorier  "+
      "gère les finances et vérifie l'authenticité des billets électroniques. Le chef d'équipe sélectionne les joueurs  "+
      "pour les compétitions, avec une validation finale par l'administrateur.",
      image:"assets/projects/websport/websport1.png",
    },
    {
      titre:"titre1",
      description:"Cette application mobile attribue des tickets électroniques aux utilisateurs après un paiement "+
      "ou un parrainage. Chaque ticket, enregistré dans l'application, peut être scanné pour vérifier son authenticité. "+
      "Il est également disponible en format PDF, permettant aux utilisateurs de l'imprimer en version physique s'ils "+
      "le souhaitent.",
      image:"assets/projects/mobilesport/mobilesport1.png",
    },
    {
      titre:"Ah-METEO",
      description:"Cette application mobile se connecte à une API pour afficher en temps réel les prévisions "+
      "météorologiques au Sénégal, offrant ainsi aux utilisateurs des informations précises sur la météo locale.",
      image:"assets/projects/meteo/meteo6.png",
    },
    {
      titre:"E-Sport Mobile",
      description:"Les utilisateurs de cette application mobile peuvent consulter les matchs à venir, "+
      "acheter des billets en ligne et suivre les actualités sportives. Ils ont également accès à des billets "+
      "électroniques sécurisés, vérifiables via un scan. Les administrateurs gèrent l'organisation des événements "+
      "sportifs, les sanctions des joueurs, et valident les équipes formées par les chefs d'équipe. Les community "+
      "managers tiennent les utilisateurs informés des dernières nouvelles sportives, tandis que les trésoriers "+
      "assurent la gestion des transactions et des finances liées aux événements.",
      image:"assets/projects/mobilesport/mobilesport1.png",
    }
  ]

}
