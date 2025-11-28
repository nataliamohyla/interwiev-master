import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    // RouterLinkActive,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatToolbar,
    MatSidenavModule,
    RouterLinkActive
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


}
