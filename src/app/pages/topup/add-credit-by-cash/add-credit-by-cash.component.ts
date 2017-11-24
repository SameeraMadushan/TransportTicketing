import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-credit-by-cash',
  templateUrl: './add-credit-by-cash.component.html',
  styleUrls: ['./add-credit-by-cash.component.scss']
})
export class AddCreditByCashComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/paymentMethod']);
  }
}
