import { FinancesComponent } from './finances.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionFormComponent,
    TransactionListComponent,
    FinancesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FinancesModule { }
