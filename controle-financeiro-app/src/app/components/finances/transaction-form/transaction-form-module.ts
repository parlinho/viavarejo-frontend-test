import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from './transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
    declarations: [
        TransactionFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxCurrencyModule
    ],
    exports: [
        TransactionFormComponent
    ],
    providers: [

    ]
})
export class TransactionFormModule { }

