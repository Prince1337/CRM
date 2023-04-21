import { Customer } from "./customer";

export class RecurringInvoice {
    id!: number;
    invoiceNumber!: number;
    frequency!: number;
    status!: string;
    nextIssueDate!: Date;
    amount!: number;
    customer!: Customer;
    }