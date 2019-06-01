export class Transaction {
    type: string;
    commodity: string;
    price: number;

    constructor({
        type,
        commodity,
        price
    }
    ) {
        this.type = type;
        this.commodity = commodity;
        this.price = price;
    }
}