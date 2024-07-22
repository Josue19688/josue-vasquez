import { Component } from '@angular/core';
import { StarComponent } from '../../shared/star/star.component';
import { GradienteLeftComponent } from '../../shared/gradiente-css/gradiente-left.component';
import NabBarComponent from '../../shared/nab-bar/nab-bar.component';
import { GradienteComponent } from '../../shared/gradiente-css/gradiente.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector:'app-home',
  standalone: true,
  imports: [
   
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export  class HomeComponent {

}
