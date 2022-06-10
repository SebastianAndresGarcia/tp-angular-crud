import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';

@Component({
  selector: 'detalleinstrumento',
  templateUrl: './detalleinstrumento.component.html',
  styleUrls: ['./detalleinstrumento.component.css']
})
export class DetalleinstrumentoComponent implements OnInit {
  instrumento: any;
  constructor(private serviinstrumento: ServinstrumentoService, private activatedRoute: ActivatedRoute) {

    //console.log("ID PARAM " + this.activatedRoute.params['id']);
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.instrumento = this.serviinstrumento.getInstrumentoXId(params['id'])
    })
  }

  ngOnInit(): void {
    
  }

}
