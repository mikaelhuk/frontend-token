import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss']
})
export class CriarEventoComponent implements OnInit {
  user_id = Number(localStorage.getItem('user_id'));
  evento_form: FormGroup;
  constructor(private form_buider: FormBuilder, private event_service: EventService) {
    this.evento_form = this.form_buider.group({
      descricao: '',
      data_inicio: '',
      data_fim: '',
      hora_inicio: '',
      hora_fim: ''
    })
  }

  ngOnInit(): void {
  }

  criar_evento() {
    const { descricao, data_inicio, data_fim, hora_inicio, hora_fim } = this.evento_form.getRawValue();
    const inicio = `${data_inicio}T${hora_inicio}:00`;
    const fim = `${data_fim}T${hora_fim}:00`;
    this.event_service.create_event(this.user_id, descricao, inicio, fim).subscribe();
    console.log(this.user_id);
  }

}
