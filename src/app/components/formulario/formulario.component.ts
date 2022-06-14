import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
import { instrumento } from 'src/modelo/instrumento';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  instru: instrumento = {
    id: 0,
    instrumento: "",
    marca: "",
    modelo: "",
    precio: 0,
    costoEnvio: "",
    imagen: "",
    cantidadVendida: 0,
    descripcion: ""
  };
  constructor(private serviinstrumento: ServinstrumentoService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.serviinstrumento.getInstrumentoXIdFecth(params['id'])
        .subscribe((dataInstrumentos: { [x: string]: instrumento; }) => {
          for (let i in dataInstrumentos) {
            console.log(dataInstrumentos[i]);
            this.instru = (dataInstrumentos[i]);
          }

        })
    })
  }

  ngOnInit(): void {
  }
  async guardar() {
    await this.serviinstrumento.guardarInstrumento(this.instru);
    //location.reload();
    this.router.navigate(['/tablecrud']);
  }

  addNew(formu: NgForm) {
    this.router.navigate(['/formulario', '0']);
    formu.reset({
      id: 0,
      instrumento: "",
      marca: "",
      modelo: "",
      precio: 0,
      costoEnvio: "",
      imagen: "",
      cantidadVendida: 0,
      descripcion: ""
    });
  }
}
