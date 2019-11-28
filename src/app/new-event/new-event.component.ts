import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  
  Event = {name:"", description: "", date: ""}
  constructor(private _auth: AuthService,
  private _router: Router) { }

  ngOnInit() {
  }

  createNewEvent(){
    this._auth.addEvent(this.Event)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/events/all'])
      },
      err => console.log(err)
    )
  }

}
