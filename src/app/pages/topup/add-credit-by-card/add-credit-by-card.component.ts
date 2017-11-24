import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-credit-by-card',
  templateUrl: './add-credit-by-card.component.html',
  styleUrls: ['./add-credit-by-card.component.scss']
})
export class AddCreditByCardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['/paymentMethod']);
  }
  cancel(){
    this.router.navigate(['/paymentMethod']);
  }
}
