import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/models/finances/finances.model';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss']
})
export class FinancesComponent implements OnInit {

  public transaction: Transaction;
  public transactionList: Array<Transaction>;

  public reciverFeedback(transaction: Transaction) {
    this.transaction = transaction;
    this.LocalStorageService.setTransactionInLocalStorage(transaction);
    this.transactionList = this.LocalStorageService.getTransactionListFromLocalStorage();
  }

  constructor(private LocalStorageService: LocalStorageService) { }

  ngOnInit() {
    this.transactionList = this.LocalStorageService.getTransactionListFromLocalStorage();
  }
}


