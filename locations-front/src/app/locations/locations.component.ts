import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Array<any> = [
    { name: 'Cosa', area: 123, parentLocation: { name: 'Cosa Madre' } }
  ];
  constructor() { }

  ngOnInit() {
    axios.get('http://localhost:5000/locations').then(res => {
      if (res.data) {
        this.locations = res.data;
      }
    }).catch(err => {
      console.log(err);
    });
  }
  showName(name: string){
    console.log(name);
  }
}
