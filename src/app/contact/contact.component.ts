import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [    
    CommonModule,
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  informations = [
    {titre :"e-mail", valeur:"mailto: ahmadou.ndiaye030602@gmail.com", image:"email.png" ,taget:"_self"},
    {titre :"Github", valeur:"https://github.com/Ahmadou0306", image:"github.png" ,taget:"_target"},    
    {titre :"linkedin", valeur:"https://www.linkedin.com/in/ahmadou-ndiaye-792a09205", image:"linkedin.png" ,taget:"_target"},
    {titre :"site", valeur:"#home", image:"site.png" ,taget:"_self"},
  ]

}
