import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-price-package',
  templateUrl: './price-package.component.html',
  styleUrls: ['./price-package.component.css']
})
export class PricePackageComponent {

  // Form data model
  formData = {
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    message: ''
  };

  // Feedback messages
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  // Handle form submission
  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    // Send data to Django backend API
    this.http.post(`${environment.apiUrl}/api/submit_form/`, this.formData)
      .subscribe({
        next: (response: any) => {
          // Show success message
          this.successMessage = "✅ Your enquiry has been successfully submitted! We'll get back to you shortly.";

          // Reset the form fields
          this.formData = {
            name: '',
            phone: '',
            email: '',
            city: '',
            date: '',
            message: ''
          };

          // Auto-hide success message after 5 seconds
          setTimeout(() => this.successMessage = '', 5000);
        },
        error: (err) => {
          console.error('Error submitting form:', err);

          // Show error message
          this.errorMessage = "❌ Oops! Something went wrong while submitting the form. Please try again later.";

          // Auto-hide error message after 5 seconds
          setTimeout(() => this.errorMessage = '', 5000);
        }
      });
  }
}
