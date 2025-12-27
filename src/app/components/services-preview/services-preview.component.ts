import { Component } from '@angular/core';

@Component({
  selector: 'app-services-preview',
  templateUrl: './services-preview.component.html',
  styleUrls: ['./services-preview.component.css']
})
export class ServicesPreviewComponent {
  services = [
    { id:1, title: 'Bridal Makeover', desc:'Full-day bridal package', img:'assets/images/IMG_0217.JPG', price:'Custom' },
    { id:2, title: 'Advertisement', desc:'Evening & party looks', img:'assets/images/IMG_0218.JPG', price:'₹1500+' },
    { id:3, title: 'Celebrity Makeover', desc:'Updos, curls & extensions', img:'assets/images/IMG_0219.JPG', price:'₹1000+' },
    { id:4, title: 'Trial makeover', desc:'Flawless long-lasting finish', img:'assets/images/IMG_0220.JPG', price:'₹2000+' },
    { id: 5, title: 'Magazine', img: 'assets/images/IMG_0221.JPG' },
    { id: 6, title: 'Movies and promos', img: 'assets/images/IMG_0222.JPG' },
    { id: 7, title: 'Rells', img: 'assets/images/IMG_0226.JPG' },
    { id: 8, title: 'Vedios', img: 'assets/images/IMG_0224.JPG' },
    { id: 9, title: 'Saree Draping', img: 'assets/images/IMG_0215.JPG' }
    ];
}
