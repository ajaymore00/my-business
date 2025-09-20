import { Component } from '@angular/core';
import {MaterialModule} from "../../material.module";
import { MatToolbar } from "@angular/material/toolbar";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, MatToolbar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
