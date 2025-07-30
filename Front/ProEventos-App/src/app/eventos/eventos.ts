import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eventos',
  imports: [NgbAlert],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss'
})
export class Eventos implements OnInit{

  public eventos: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error) 
    );
  }
}
