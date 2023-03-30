import { Contact } from "../contacts/contact";

export class Customer {
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    createdAt!: Date;
    contacts!: Contact[];
}
