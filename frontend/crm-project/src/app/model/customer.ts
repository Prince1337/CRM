export class Customer {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    createdAt!: Date;
    _links!: {
        self: { href: string; };
        customer: { href: string; };
    };
  }