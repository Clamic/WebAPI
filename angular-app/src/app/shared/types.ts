export interface Invoice {
    InvoiceId: number,
    ClientId: number,
    InvoiceDate: Date,
    InvoiceNo: string,
    InvoiceAmount: number
}

export interface Client {
    ClientId: number | undefined,
    FirstName: string,
    Surname: string,
    DateOfBirth: Date,
    Address: string,
    Suburb: string,
    State: string,
    PostCode: string,
    Telephone: string,
    active: boolean
}