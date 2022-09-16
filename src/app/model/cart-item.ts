export class CartItem{
    url: string;
    name: string;
    amount: number;
    price: number;

    constructor(){
        this.url = '';
        this.name = '';
        this.amount = 1;
        this.price = 0.0;
    }
}