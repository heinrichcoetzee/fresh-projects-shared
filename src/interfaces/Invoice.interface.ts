interface Invoice {
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
