import { Component, NgModule, OnInit } from '@angular/core';
import { instrumento } from 'src/modelo/instrumento';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tablecrud',
  templateUrl: './tablecrud.component.html',
  styleUrls: ['./tablecrud.component.css']
})
export class TablecrudComponent implements OnInit {

  page = 1;
  pageSize = 4;
  instrumentosArr: instrumento[] = [];
  collectionSize = this.instrumentosArr.length;

  constructor(private serviinstrumento: ServinstrumentoService, private activatedRoute: ActivatedRoute) {
    
  }



  ngOnInit(): void {
    this.serviinstrumento.getInstrumentos() 
    .subscribe((dataInstrumentos: { [x: string]: instrumento; }) => {
      for(let instrumento in dataInstrumentos){
        console.log(dataInstrumentos[instrumento]);
        this.instrumentosArr.push(dataInstrumentos[instrumento]);
      }
      
    })
  }

}
