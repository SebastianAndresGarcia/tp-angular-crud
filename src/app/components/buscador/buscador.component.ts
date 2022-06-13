import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
import { instrumento } from 'src/modelo/instrumento';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  instrumentosArr: instrumento[] = [];
  termino: any;

  constructor(private serviinstrumento: ServinstrumentoService, private router: Router, private activatedRoute: ActivatedRoute) {
    
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'].toLowerCase();
      this.serviinstrumento.getInstrumentos().subscribe((dataInstrumentos: instrumento[]) => {
        for (let instrumento in dataInstrumentos) {
          let nombre = dataInstrumentos[instrumento].instrumento.toLowerCase();
          if (nombre.indexOf(this.termino) >= 0) {
            this.instrumentosArr.push(dataInstrumentos[instrumento]);
            console.log(dataInstrumentos[instrumento]);
          }
        }
      })
    })
  }


  public verInstrumento(idx: string) {
    this.router.navigate(['/detalleinstrumento', idx])
  }

}
function dataInstrumentos(dataInstrumentos: any) {
  throw new Error('Function not implemented.');
}

