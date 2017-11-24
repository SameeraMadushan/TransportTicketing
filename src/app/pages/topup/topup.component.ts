import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';
//import { UserServiceService  } from '../services/user-service.service';
import { Router } from '@angular/router';
import {Http} from '@angular/http';


@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  crediantials:any;
  
  session:any=window.localStorage.getItem("session");
  
  constructor(private router: Router,private http: Http ) { 
    this.crediantials = [{
      email:'chamindu123@my.com',
      password:'newPassword'
    }];
    var data = this.userLogin(this.crediantials);
    console.log(data);
  }
  
  userLogin(cred): boolean{
    var restData;
    
    this.http.get ('http://192.168.1.100:4000/api/user').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });


    //let global = this;
   var value = this.http.post(
    'http://192.168.1.100:4000/api/user/login',
    this.crediantials).subscribe(data => {
      //return data.json().success;
      restData = data.json().success;
      console.log(restData);
    })
    return  (restData);    
  }

  ngOnInit() {
    window.localStorage.removeItem("session");
    if(this.session != null ){
      this.router.navigate(['/selectTransaction']);
    }
    
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
        global.crediantials = [{
          email:global.card,
          password:global.password
        }];
        global.router.navigate(['/selectTransaction']);
        window.localStorage.setItem("session",global.password);
        window.localStorage.setItem("continue","login");
        global.userLogin(global.crediantials);

      }
    });
  }
}
