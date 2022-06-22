import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';
import { Evento } from 'src/app/models/Evento';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  meses = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro',
  }
  dia: string;
  mes: string;
  hora: string;
  descricao: string;
  @Input() evento: Evento;
  constructor(
    private router: Router,
    private event_service: EventService
  ) {

  }

  ngOnInit(): void {
    Feather.replace();
    this.dia = this.evento.inicio.split('T')[0].split('-')[2];
    this.mes = this.meses[this.evento.inicio.split('T')[0].split('-')[1]];
    const hora_inicio = this.evento.inicio.split('T')[1].split(':')
    this.hora = hora_inicio[0] + ":" + hora_inicio[1];
    this.descricao = this.evento.descricao;
  }

  redirect() {
    this.router.navigateByUrl('/update-event', { state: { evento: this.evento } })
  }

  delete() {
    this.event_service.delete_event(this.evento.id).subscribe();
    console.log(this.evento.id);
  }
}
