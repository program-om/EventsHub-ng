import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = "http://localhost:3000/api/events";
  private specialEventsUrl = "http://localhost:3000/api/events/special";
  private likeEventUrl = "http://localhost:3000/api/events/like";
  private deleteEventUrl = "http://localhost:3000/api/events/delete";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this.eventsUrl)
  }

  getSpecialEvents(){
    return this.http.get<any>(this.specialEventsUrl)
  }

  likeEvent(event){
    return this.http.patch<any>(this.likeEventUrl, event);
  }

  deleteEvent(event){
    return this.http.patch<any>(this.deleteEventUrl, event);
  }
}
