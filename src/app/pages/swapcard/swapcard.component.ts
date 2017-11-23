import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-swapcard',
  templateUrl: './swapcard.component.html',
  styleUrls: ['./swapcard.component.css']
})
export class SwapcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  card = '';
  onClick(){
    swal({
      position: 'center',
      type: 'success',
      title: 'Have a Safe Journey! '+this.card,
      showConfirmButton: false,
      timer: 2000
    })
  }
}
