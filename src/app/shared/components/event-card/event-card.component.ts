import { Component, Input, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() dia: number;
  @Input() mes: string;
  @Input() hora: string;
  @Input() descricao: string;
  constructor() { 
    this.dia=10;
    this.mes='julho';
    this.hora='20:00';
    this.descricao='salve galerinha, dia de comer churrasco';
  }

  ngOnInit(): void {
    Feather.replace();
  }

}
