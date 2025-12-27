import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  serviceId: number = 0;
  serviceData: any;

  // Sample data for each service
  allServices = [
    {
      id: 1,
      title: 'Artistry Showcase',
      description:
        'Experience the perfect bridal transformation with premium makeup, hairstyling, and draping services.',
      images: [
        { src: 'assets/images/IMG_0176.JPG' },
        { src: 'assets/images/IMG_0178.JPG' },
        { src: 'assets/images/IMG_0179.JPG' },
        { src: 'assets/images/IMG_0209.JPG' },
        { src: 'assets/images/IMG_0210.JPG' },
        { src: 'assets/images/IMG_0211.JPG' },
        { src: 'assets/images/IMG_0213.JPG' },
        { src: 'assets/images/IMG_0214.JPG' },
        { src: 'assets/images/IMG_0215.JPG' },
        { src: 'assets/images/IMG_0224.JPG' },
        { src: 'assets/images/IMG_0217.JPG' },
        { src: 'assets/images/IMG_0218.JPG' },
        { src: 'assets/images/IMG_0219.JPG' },
        { src: 'assets/images/IMG_0220.JPG' },
        { src: 'assets/images/IMG_0221.JPG' },
        { src: 'assets/images/IMG_0225.JPG' },
        { src: 'assets/images/IMG_0226.JPG' },
        { src: 'assets/images/IMG_0229.JPG' },
        { src: 'assets/images/IMG_0230.JPG' },
        { src: 'assets/images/IMG_0231.JPG' },
        { src: 'assets/images/IMG_0232.JPG' },
        { src: 'assets/images/IMG_0262.JPG' },
        { src: 'assets/images/IMG_0263.JPG' },
        { src: 'assets/images/IMG_0264.JPG' },
        { src: 'assets/images/IMG_0265.JPG' },
        { src: 'assets/images/IMG_0266.JPG' },
        { src: 'assets/images/IMG_0267.JPG' },
        { src: 'assets/images/IMG_0269.JPG' },
        { src: 'assets/images/IMG_0977.JPG' },
        { src: 'assets/images/IMG_0991.JPEG' },
        { src: 'assets/images/IMG_0992.JPEG' },
        { src: 'assets/images/IMG_0995.JPEG' },
        { src: 'assets/images/IMG_0996.JPEG' },
        { src: 'assets/images/IMG_2107.JPG' },
        { src: 'assets/images/IMG_2108.JPG' },
        { src: 'assets/images/IMG_2109.JPG' },
      ]
    },
    {
      id: 2,
      title: 'Advertisement',
      description:
        'Professional makeover services for brand shoots, advertising campaigns, and promotional events.',
      images: [
        { src: 'assets/images/IMG_0230.JPG', name: 'ANJALI' },
        { src: 'assets/images/IMG_0188.JPG', name: 'DIVYA' },
        { src: 'assets/images/IMG_0189.JPG', name: 'RIYA' },
        { src: 'assets/images/IMG_0194.JPG', name: 'NEHA' },
        { src: 'assets/images/IMG_0222.JPG', name: 'SNEHA' },
      ]
    },
    {
      id: 3,
      title: 'Celebrity Makeover',
      description:
        'Tailored looks for media appearances, shoots, and events by expert artists.',
      images: [
        'assets/images/IMG_0194.JPG',
        'assets/images/IMG_0196.JPG',
        'assets/images/IMG_0209.JPG'
      ]
    },
    {
      id: 4,
      title: 'Trial Makeover',
      description:
        'Try out your bridal look before the big day with our complete trial makeover session.',
      images: [
        'assets/images/IMG_0210.JPG',
        'assets/images/IMG_0211.JPG',
        'assets/images/IMG_0212.JPG',
      ]
    },
    {
      id: 5,
      title: 'Magazine',
      description:
        'High-definition makeup and styling for editorial and magazine photo shoots.',
      images: [
        'assets/magazine/mag1.jpg',
        'assets/magazine/mag2.jpg'
      ]
    },
    {
      id: 6,
      title: 'Movies and Promos',
      description:
        'Film and commercial makeover services for actors and models with on-set support.',
      images: [
        'assets/movies/movie1.jpg',
        'assets/movies/movie2.jpg'
      ]
    },
    {
      id: 7,
      title: 'Reels',
      description:
        'Camera-ready looks for Instagram reels, short films, and video shoots.',
      images: [
        'assets/reels/reel1.jpg',
        'assets/reels/reel2.jpg'
      ]
    },
    {
      id: 8,
      title: 'Videos',
      description:
        'Elegant and expressive looks tailored for professional video shoots and events.',
      images: [
        'assets/videos/video1.jpg',
        'assets/videos/video2.jpg'
      ]
    },
    {
      id: 9,
      title: 'Saree Draping',
      description:
        'Perfect saree draping for all occasions, from traditional to modern styles.',
      images: [
        'assets/saree/saree1.jpg',
        'assets/saree/saree2.jpg'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceData = this.allServices.find(s => s.id === this.serviceId);
  }
}
