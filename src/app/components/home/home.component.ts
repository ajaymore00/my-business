import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  title: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  businessName = 'Sanskruti Enterprises';
  tagline = 'Making Your Garden Green & Clean';
contact = {
    phone: '+91 839 085 2369',
    email: 'contact@sanskrutienterprises.com',
    address: 'House No 110 B,Zadani,Vavoshi,Tal-Khalapur, Dist-Raigad Maharashtra 410203'
  };
  services: Service[] = [
    {
      title: 'Grass Cutting',
      description: 'We provide precise and professional lawn mowing services to keep your garden fresh and healthy.',
      image: 'assets/grassCutting.jpg'
    },
    {
      title: 'Gardening',
      description: 'Planting, trimming, and complete garden maintenance for a beautiful outdoor space.',
      image: 'assets/gardening.jpg'
    },
    {
      title: 'Tree Cutting',
      description: 'Safe and expert tree trimming and removal services for your property.',
      image: 'assets/treeCutting.jpg'
    },
    {
      title: 'Plant Care',
      description: 'From watering to fertilizing, we ensure your plants thrive every season.',
      image: 'assets/plantCare.jpg'
    }
  ];
}
