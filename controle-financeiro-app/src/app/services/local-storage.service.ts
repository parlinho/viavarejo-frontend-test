import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getTransactionListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('transactionList') || '[]');
  }

  public setTransactionInLocalStorage(transaction: any) {
    let transactionListFromLocalStorage = this.getTransactionListFromLocalStorage();
    transactionListFromLocalStorage.unshift(transaction);
    localStorage.setItem('transactionList', JSON.stringify(transactionListFromLocalStorage));
    console.log('transactionListFromLocalStorage: ', this.getTransactionListFromLocalStorage());
  }

  constructor() { }
}
