import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.triggerAnimations();
  }

  triggerAnimations() {
    const elements = document.querySelectorAll('.fade-left');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

   averageRating = 4.9;
  totalReviews = 50;
    ratingText = "EXCELLENT";

  // Precompute full stars as array
  fullStars: number[] = [];

  reviews = [
    { name: "Aishwarya", comment: "Very professional and the makeover lasted the entire day!", rating: 5, avatar: "assets/images/IMG_0185.JPG" },
    { name: "Nandana", comment: "Very professional and the makeover lasted the entire day!", rating: 5, avatar: "assets/images/IMG_0185.JPG" },
    { name: "Pranitha", comment: "Amazing experience! The look was exactly how I dreamed.", rating: 5, avatar: "assets/images/IMG_0188.JPG" },
    { name: "Athira", comment: "Loved the hairstyle and makeup. Thank you so much!", rating: 5, avatar: "assets/images/IMG_0189.JPG" }
  ];

  constructor() {
    // Precompute star array for average rating
    this.fullStars = Array(Math.floor(this.averageRating)).fill(0);
  }

}
