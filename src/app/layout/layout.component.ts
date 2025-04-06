import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
