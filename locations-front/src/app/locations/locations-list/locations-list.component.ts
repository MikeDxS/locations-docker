import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  name: string = '';
  id: number = 0;
  interLocations: Array<any> = [];
  area: number = 0;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = parseInt(params.get('id'));
      }
    });
    if (this.id > 0) {
      axios.get(`http://localhost:5000/locations/${this.id}`)
      .then(res => {
        if (res.data) {
          this.name = res.data.name;
          this.area = res.data.area;
          this.interLocations = res.data.internalLocations;
        }
      }).catch(err => {
        console.log(err.message);
      });
    }
  }

}
