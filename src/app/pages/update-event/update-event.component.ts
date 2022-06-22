import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventService } from 'src/app/services/event.service';

@Component({
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  id = Number();
  evento: Evento;

  update_evento_form: FormGroup;
  constructor(
    private form_buider: FormBuilder,
    private update_event_service: EventService,
    private router: Router
  ) {
    this.evento = this.router.getCurrentNavigation()?.extras.state['evento'];
    this.update_evento_form = this.form_buider.group({
      descricao: '',
      data_inicio: '',
      data_fim: '',
      hora_inicio: '',
      hora_fim: ''
    })
  }

  ngOnInit(): void {
    console.log(this.evento);
  }

  update_evento() {
    const { descricao, data_inicio, data_fim, hora_inicio, hora_fim } = this.update_evento_form.getRawValue();
    const inicio = `${data_inicio}T${hora_inicio}:00`;
    const fim = `${data_fim}T${hora_fim}:00`;
    this.update_event_service.update_event(this.evento.id, descricao, inicio, fim).subscribe();
    this.router.navigate(['events']);
  }

}
