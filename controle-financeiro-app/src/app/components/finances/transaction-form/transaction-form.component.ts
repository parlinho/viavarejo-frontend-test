import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  public transactionForm: FormGroup;
  public transaction: any = {};
  public isSubmitted = false;

  @Output() transactionData = new EventEmitter();

  get type() { return this.transactionForm.get('type'); }
  get commodity() { return this.transactionForm.get('commodity'); }
  get price() { return this.transactionForm.get('price'); }

  onSubmit() {
    this.isSubmitted = true;
    if (this.transactionForm.invalid) {
      return;
    }
    console.log(this.transactionForm.value);
    this.LocalStorageService.setTransactionInLocalStorage(this.transactionForm.value);
  }

  constructor(private LocalStorageService: LocalStorageService) { }

  ngOnInit() {
    this.transactionForm = new FormGroup({
      'type': new FormControl(this.transaction.type, Validators.required),
      'commodity': new FormControl(this.transaction.alterEgo, Validators.required),
      'price': new FormControl(this.transaction.price, Validators.required)
    });
  }
}
