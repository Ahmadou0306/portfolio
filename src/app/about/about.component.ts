import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  infos = [
    { key: 'Nom', value: 'Ahmadou NDIAYE' },
    { key: 'Date de naissance', value: '03/06/2002' },
    { key: 'Adresse', value: 'Dakar, Sénégal' },
    { key: 'E-mail', value: 'ahmadou.ndiaye030602@gmail.com' }
  ];
}
