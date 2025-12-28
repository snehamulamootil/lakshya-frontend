import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  faqs = [
    {
      question: 'Do you provide bridal makeup trials?',
      answer: 'Yes, we highly recommend bridal trials to finalize the perfect look before your wedding day.'
    },
    {
      question: 'How long does bridal makeup last?',
      answer: 'Our makeup is designed to last throughout the ceremony using premium, long-wear products.'
    },
    {
      question: 'Do you travel for destination weddings?',
      answer: 'Yes, Lakshya Makeovers offers services across Kerala and for destination weddings.'
    },
    {
      question: 'Do you use international makeup brands?',
      answer: 'We use only high-quality, professional and international makeup brands suitable for all skin types.'
    }
  ];

}
