 import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/Evento';
import { EventService } from 'src/app/services/event.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  user_id: string | null = '';
  eventos: Evento[] = [];
  constructor(private event_service: EventService) { }

  ngOnInit(): void {

    this.user_id = localStorage.getItem('user_id')
    this.event_service.get_events(this.user_id).subscribe((events: any) => {
      events.forEach((element: Evento) => {
        this.eventos.push(element);
      });
    }
    )
    console.log(this.eventos);
  }

}
