import { Component, OnInit } from '@angular/core';
import { RegistroResponse } from './interfaces/registro';
import { RegistroService } from './services/registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test-app';

  handleSearch(value: string){
    this.filtro_valor = value 
  }

  filtro_valor= ''

  public registros: any = [];

  constructor(
    private registroService: RegistroService
  ){}

  ngOnInit(): void{
    this.getAllRegistros();
  }

  getAllRegistros(){
    this.registroService.getAllRegistros()
    .subscribe((response) => {
      this.registros = response;
    });
  }
}
