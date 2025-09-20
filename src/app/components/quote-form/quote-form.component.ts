import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss'
})
export class QuoteFormComponent {
  submitQuote() {
    alert('Quote request submitted successfully!');
  }

}
