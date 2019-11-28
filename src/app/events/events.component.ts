import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = []
  anEvent = {}
  constructor(private _eventService: EventService,
    private _router: Router,
    public _authService: AuthService) { }

  ngOnInit() {
    this.allEvents()
  }

  allEvents(){
    this._eventService.getEvents()
    .subscribe( res => {
        this.events = res
      },
      err => console.log(err)
    )
  }

  likeEvent(event){
    return this._eventService.likeEvent({eventId: event._id})
    .subscribe( res => {
      console.log(res)
    })
  }

  toNewEvent(){
    this._router.navigate(['/events/newEvent'])
  }
}
