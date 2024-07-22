import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import NabBarComponent from './shared/nab-bar/nab-bar.component';
import { GradienteComponent } from './shared/gradiente-css/gradiente.component';
import { GradienteLeftComponent } from './shared/gradiente-css/gradiente-left.component';
import { StarComponent } from './shared/star/star.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    StarComponent,
    NabBarComponent,
    GradienteComponent,
    GradienteLeftComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
