import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Nab-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nab-bar.component.html',
  styles: ``
})
export default class NabBarComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
