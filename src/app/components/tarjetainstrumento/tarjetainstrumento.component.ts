import { Component, OnInit } from '@angular/core';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tarjetainstrumento',
  templateUrl: './tarjetainstrumento.component.html',
  styleUrls: ['./tarjetainstrumento.component.css']
})
export class TarjetainstrumentoComponent implements OnInit {

  instrumentosArr:any[] = [];
  
  //al instanciar el componente se llama al servicio
  constructor(private serviinstrumento: ServinstrumentoService, private router:Router) { }

  ngOnInit(): void {
    this.instrumentosArr = this.serviinstrumento.getInstrumentos(); 
    console.log(this.instrumentosArr);
  }
  public verInstrumento(idx:number){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleinstrumento', idx]) 
  }
}
