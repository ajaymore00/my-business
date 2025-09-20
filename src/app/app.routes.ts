import { Routes } from '@angular/router'; 
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteFormComponent },
  { path: '**', redirectTo: '' }
];