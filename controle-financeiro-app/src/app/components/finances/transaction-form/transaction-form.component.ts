import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  transactionForm = new FormGroup({
    transactionType: new FormControl(''),
    commodityName: new FormControl(''),
    price: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.transactionForm.value);
  }

  constructor() { }

  ngOnInit() {

  }

}
