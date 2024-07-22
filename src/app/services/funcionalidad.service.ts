import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadService {

  constructor() { }

  //este observable me puedo suscribir a el donde quiera
  public menuDesplegable : EventEmitter<string> = new EventEmitter<string>();
  public menuActivo:  EventEmitter<string> = new EventEmitter<string>();

  
}
