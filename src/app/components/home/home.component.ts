import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
interface Service {
  title: string;
  description: string;
  image: string;
}
interface Testimonial {
  name: string;
  feedback: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  businessName = 'Sanskruti Enterprises';
  tagline = 'Making Your Garden Green & Clean';

  aboutText = `We are passionate about transforming outdoor spaces into green, fresh, and peaceful
  areas where you can relax and enjoy nature. With years of experience in lawn care, gardening,
  and tree maintenance, we provide reliable and professional services that keep your garden
  beautiful throughout the year.`;


  contact = {
    phone: '+91 839 085 2369',
    email: 'contact@sanskrutienterprises.com',
    address: 'House No 110 B,Zadani,Vavoshi,Tal-Khalapur, Dist-Raigad Maharashtra 410203',
     hours: 'Mon - Sun: 8:00 AM - 6:00 PM',
      whatsappLink: 'https://wa.me/918390852369'
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

    testimonials: Testimonial[] = [
    {
      name: 'Ravi Kulkarni',
      feedback: 'They turned my messy backyard into a beautiful lawn. Very professional work!'
    },
    {
      name: 'Priya Sharma',
      feedback: 'Excellent gardening service, friendly team, and affordable prices. Highly recommend!'
    }
  ];
}
