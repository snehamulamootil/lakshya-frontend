import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {




  @ViewChild('navCollapse') navCollapse!: ElementRef;

  closeNavbar() {
    if (this.navCollapse.nativeElement.classList.contains('show')) {
      this.navCollapse.nativeElement.classList.remove('show');
    }
  }
}
