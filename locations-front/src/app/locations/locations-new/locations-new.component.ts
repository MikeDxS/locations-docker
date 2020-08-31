import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations-new',
  templateUrl: './locations-new.component.html',
  styleUrls: ['./locations-new.component.css']
})
export class LocationsNewComponent implements OnInit {

  name: string = '';
  area: number = 1;
  parentLocation: number | null = null;
  isOk: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  insertLocation(){
    console.log(this.name, this.area);
    axios.post('http://localhost:5000/locations', {
      name: this.name,
      area: this.area,
      parentLocation: this.parentLocation
    }).then(res => {
      if (res.data) {
        this.isOk = true;
        this.isError = false;
      }
    }).catch(err => {
      console.log(err);
      this.isOk = false;
      this.isError = true;
      this.errorMessage = err.message;
      if (err.data.message) {
        this.errorMessage = `Puede que el lugar ya contenga a ${this.name}`;
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('parentId')) {
        this.parentLocation = parseInt(params.get('parentId'));
      }
    });
  }
}
