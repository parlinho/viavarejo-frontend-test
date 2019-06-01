import { FinancesComponent } from './finances.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormModule } from './transaction-form/transaction-form-module';
import { TransactionListModule } from './transaction-list/transaction-list-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FinancesComponent
  ],
  imports: [
    TransactionFormModule,
    TransactionListModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FinancesModule { }
