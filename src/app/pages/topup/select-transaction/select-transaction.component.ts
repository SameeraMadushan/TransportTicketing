import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-select-transaction',
  templateUrl: './select-transaction.component.html',
  styleUrls: ['./select-transaction.component.scss']
})
export class SelectTransactionComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
    if(window.localStorage.getItem("continue") == "null" || window.localStorage.getItem("continue") == undefined){
      window.localStorage.setItem("session",null);
      window.localStorage.setItem("continue","login");
      this.sweetAlert();
      this.router.navigate(['/topup']);
    }
  }
  addCredit(){
    this.router.navigate(['/paymentMethod']);
  }
  balance(){
    this.router.navigate(['/paymentMethod']);
  }
  sweetAlert(){
    let global = this;
    swal({
      title: 'Are you sure?',
      text: "You want to Logout",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then(function (result) {
      if (result.value) {
        swal({
          title: 'Successfully Logged out!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        global.router.navigate(['/topup']);
      }
    })
  }
}
