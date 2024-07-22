import { Component } from '@angular/core';
import { CarouselLeftComponent } from '../../shared/star/carousel-left.component';
import { CardServicioComponent } from "../../shared/star/services-card.component";
import { CardServicesComponent } from '../../shared/star/cardServices.component';

@Component({
  standalone: true,
  imports: [
    CarouselLeftComponent,
    CardServicioComponent,
    CardServicesComponent
],
  templateUrl: './inicio.component.html',
  styles: ``
})
export class InicioComponent {

}
