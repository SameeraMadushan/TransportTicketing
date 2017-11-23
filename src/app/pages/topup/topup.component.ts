import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  card = '';
  loggedIn = 'yes';
  onClick() {
    swal.setDefaults({
      input: 'password',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      inputPlaceholder: 'Enter your password'
    })
    var steps=[
      'Your user ID: '+this.card+'\nEnter your password'
    ]
    swal.queue(steps).then(function (result) {
      swal.resetDefaults()
      if (result.value == '123') {
        swal({
          title: 'Successfully Logged in!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        console.log('CALLED');
        this.loggedIn = 'No';
        console.log(this.loggedIn);
      }
      else if(result.value != '123' && result.value != undefined){
        swal({
          title: 'Invalid Login Details! Try again!',
          type: 'error',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
}
