export interface Sale {
  saleId?: string
  productId: string
  invoiceId: string
}

export interface Invoices {
  invoiceId?: string
  userId: string
  invoiceDate: Date
}

export type NewSale = Sale
