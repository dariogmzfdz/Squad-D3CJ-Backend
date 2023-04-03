export interface Product {
    productId?: string;
    color: string;
    model: string;
    brand: string;
    carYear: number;
    material: string;
    amount: number;
    price: number;
    type: string;
    scale: number;
    secondHand: string;
    description: string;
    images: Images[];
    cars?: Cars[];
}

export interface Images {
    imageId?: string;
    productId?: string;
    path: string;
}

export interface Cars {
  carId?: string
  userId: string
  productId: string
  amount: number
  price: number
  description: string
  secondHand: string
  isAdmin: boolean
  product?: Product
}