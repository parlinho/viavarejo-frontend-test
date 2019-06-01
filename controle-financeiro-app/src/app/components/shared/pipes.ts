import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
    transform(amount: number): string {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
    }
}