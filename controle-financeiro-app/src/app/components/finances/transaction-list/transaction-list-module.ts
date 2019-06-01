import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TransactionListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        TransactionListComponent
    ],
    providers: [

    ]
})
export class TransactionListModule { }
