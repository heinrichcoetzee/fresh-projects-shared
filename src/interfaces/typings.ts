
 export interface AccountsEntry {
    id: string;
    month: Month;
    monthStart: string | Date;
    company: Company;
    submitted: boolean;
    approved: boolean;
    amount: boolean;
    status: string;
    employeeId: string;
    subProjectId: string;
    projectId: string;
    doTotal: boolean;
    clientId: string;
    feeAmount: boolean;
    timeAmount: boolean;
    expAmount: boolean;
    note: string;
    taxRate: boolean;
    invoiced: boolean;
    invoice: Invoice;
    posted: boolean;
    creditNote: Invoice;
  }
  
  export interface Client {
    _id: string;
    name: string;
    status: string;
    company: Company;
    taxRate: number;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    postCode: string;
    taxReference: string;
    xeroID: string;
    paymentTerms: number;
    xeroTaxRate: string;
    contact: string;
    pastelCode: string;
    sageoneIdJson: string;
    sageoneTaxTypeJson: string;
    isSupplier: boolean;
    email: string;
    telephone: string;
    trackingCat1: string;
    trackingCat2: string;
    xeroClientSettings: Object;
  }

  export interface Company {
    _id: string;
    name: string;
    status: string;
    locale: string;
  }

  export interface Invoice {
    id: string;
    company: Company;
    idJSON: string;
    invoiceTemplate: File;
    status: string;
    invoiceNumber: string;
    invoiceSeq: number;
    xeroDataJson: string;
    isCreditNote: boolean;
    creditNote: Invoice;
    invoiceDate: string | Date;
    client: Client;
    sageoneDataJson: string;
    paid: boolean;
    paidDate: string | Date;
    paidAmount: number;
    paidPartial: string;
    voidSeq: number;
    invoiceSeq2: number;
    converted: Object;
  }
  
  export interface Month {
    _id: string;
    company: Company;
    monthStart: string | Date;
    accountsStatus: string;
    income: number;
    directSalaryCosts: number;
    directProjectCosts: number;
    indirectCosts: number;
    profit: number;
    doCalc: boolean;
  }
  
