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
  loggedIn = true;
  loggedIn2 = false;
  password = '';
  addCredit = false;
  checkBalance = false;
  creditByCash = false;
  creditByCard = false;

  topupLogin() {
    swal.setDefaults({
      input: 'password',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      inputPlaceholder: 'Enter your password'
    })
    var steps = [
      'Your user ID: ' + this.card + '\nEnter your password'
    ]
    let global = this;
    swal.queue(steps).then(function (result) {
      swal.resetDefaults()
      if (result.value == '123') {
        swal({
          title: 'Successfully Logged in!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        global.password = result.value;
      }
      else if (result.value != '123' && result.value != undefined) {
        swal({
          title: 'Invalid Login Details! Try again!',
          type: 'error',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }).then(function () {
      if (global.password == '123') {
        global.loggedIn = false;
        global.loggedIn2 = true;
      }
    });
  }

  addCredits() {
    this.loggedIn2 = false;
    this.addCredit = true;
    this.checkBalance = false;

  }

  chkBalance() {
    this.loggedIn2 = true;
    this.checkBalance = true;
    this.addCredit = false;
  }

  addCreditsbyCash() {
    this.loggedIn2 = false;
    this.creditByCash = true;
    this.creditByCard = false;
  }

  addCreditsbyCard() {
    this.loggedIn2 = false;
    this.creditByCard = true;
    this.creditByCash = false;
  }
}
