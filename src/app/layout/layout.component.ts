import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContentComponent } from "../content/content.component";
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SideBarComponent, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
