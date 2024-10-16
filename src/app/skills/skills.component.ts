import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  isDevActive = true;

  devSkills1 = [
    {titre:"Java",progress:"85", colors:"#fe3b3b"},
    {titre:"Spring Boot",progress:"80", colors:"#ff5733"},
    {titre:"Flutter",progress:"80", colors:"#ff7433"},
    {titre:"Laravel",progress:"75", colors:"#ff9933"},

  ]
  devSkills2 =[
    {titre:"Javascript",progress:"75", colors:"#ffbe33"},
    {titre:"Angular",progress:"70", colors:"#f6ff33"},
    {titre:"Openstack / AWS",progress:"70", colors:"#ffe933"},
  ]
  
  dataSkills1 = [
    { titre: "Python", progress: "90", colors: "#3c33ff" },
    { titre: "SQL", progress: "85", colors: "#33e9ff" },
    { titre: "Statistiques", progress: "75", colors: "#33ffce" },
  ];
  dataSkills2 = [
    { titre: "Machine Learning", progress: "70", colors: "#33ff77" },
    { titre: "NoSQL", progress: "70", colors: "#33ff42" },
    { titre: "Scala", progress: "65", colors: "#5bff33" },
  ];
  setDevActive(value:boolean) {
    console.log('Dev active:', value);  // Vérification du changement de valeur
    this.isDevActive = value;
  }

}
