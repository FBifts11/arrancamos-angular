import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano-del-padre',
  standalone: true,
  imports: [],
  templateUrl: './hermano-del-padre.component.html',
  styleUrl: './hermano-del-padre.component.css'
})
export class HermanoDelPadreComponent implements OnInit{

  nombre?:string;

  constructor(private _servicioFamiliar: ServicioFamiliarService){}

  private _servicioFamiliar2 = inject(ServicioFamiliarService)

  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoMenor('Pedro')
    this.nombre = this._servicioFamiliar2.getHermanoMenor()
  }

  saludar() {
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoMayor())
  }
}
