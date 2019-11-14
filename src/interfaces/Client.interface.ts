interface Client {
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
