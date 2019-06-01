import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from 'src/app/models/finances/finances.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

export class TransactionListComponent implements OnChanges {

  public amount: number = 0;

  @Input() public transactionList: Array<Transaction>;

  public calcAmountValue(transactionList: Array<Transaction>) {
    for (let i = 0; i < transactionList.length; i++) {
      switch (transactionList[i].type) {
        case 'Compra':
          this.amount -= transactionList[i].price;
          break;
        case 'Venda':
          this.amount += transactionList[i].price;
          break;
      }
    }
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.calcAmountValue(this.transactionList);
  }

}
