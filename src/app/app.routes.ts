import { Routes } from '@angular/router';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { HomeComponent } from "./components/home/home.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quote', component: QuoteFormComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: '**', redirectTo: '' }
];