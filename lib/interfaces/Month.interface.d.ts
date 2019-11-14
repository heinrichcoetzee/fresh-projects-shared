interface Month {
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
