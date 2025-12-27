import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    'assets/images/IMG_0211.JPG',
    'assets/images/IMG_0213.JPG',
    'assets/images/IMG_0214.JPG',
    'assets/images/IMG_0215.JPG'
  ];

  testimonials = [
  { name: 'Asha R.', img: 'assets/images/IMG_0218.JPG', feedback: 'The team made me feel so beautiful and confident on my big day!' },
  { name: 'Maya S.', img: 'assets/images/IMG_0219.JPG', feedback: 'Inspirit’s styling was flawless — everyone complimented me.' },
  { name: 'Radha K.', img: 'assets/images/IMG_0220.JPG', feedback: 'Such attention to detail and care throughout. Highly recommended!' },
];



  currentIndex = 0;

  get currentImage() {
    return this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnInit() {
    setInterval(() => this.nextImage(), 5000); // Auto-slide every 5 sec
  }
}
