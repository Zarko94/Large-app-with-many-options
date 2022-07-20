import {OrderItem} from "./order-item";

export class OrderModel {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public total: number,
        public order_items: OrderItem[]
    ) {
    }
}