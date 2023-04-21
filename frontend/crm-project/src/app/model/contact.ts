import { Customer } from "./customer";

export class Contact {
    customer!: Customer;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    createdAt!: Date;
}
