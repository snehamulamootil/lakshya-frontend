import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  serviceData: any;

  // Only ONE gallery (Artistry Showcase)
  gallery = {
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
  };

  ngOnInit(): void {
    // Assign directly
    this.serviceData = this.gallery;
  }
}

