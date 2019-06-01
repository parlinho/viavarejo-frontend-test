import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from './../../../services/local-storage.service';
import { Transaction } from './../../../models/finances/finances.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  public transactionForm: FormGroup;
  public transaction: Transaction;
  public isSubmitted = false;

  @Output() addTransactionEmitter = new EventEmitter();

  get type() { return this.transactionForm.get('type'); }
  get commodity() { return this.transactionForm.get('commodity'); }
  get price() { return this.transactionForm.get('price'); }

  onSubmit() {
    this.isSubmitted = true;
    if (this.transactionForm.invalid) {
      return;
    }
    console.log(this.transactionForm.value);
    this.addTransactionEmitter.emit(new Transaction(this.transactionForm.value));
  }

  constructor(private LocalStorageService: LocalStorageService) { }

  ngOnInit() {
    this.transactionForm = new FormGroup({
      'type': new FormControl(null, Validators.required),
      'commodity': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required)
    });
  }
}
