import { Injectable } from '@angular/core';
import { Transaction } from './../models/finances/finances.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getTransactionListFromLocalStorage(): Array<Transaction> {
    return JSON.parse(localStorage.getItem('transactionList') || '[]');
  }

  public setTransactionInLocalStorage(transaction: any) {
    let transactionListFromLocalStorage = this.getTransactionListFromLocalStorage();
    transactionListFromLocalStorage.unshift(transaction);
    localStorage.setItem('transactionList', JSON.stringify(transactionListFromLocalStorage));
  }

  constructor() { }
}
