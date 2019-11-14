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
