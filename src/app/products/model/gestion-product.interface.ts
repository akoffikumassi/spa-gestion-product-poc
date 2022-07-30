export namespace GestionProductModel {
  export interface Product {
    id?: number;
    discountPercentage: number;
    price: number;
    rating: number;
    description: string;
    title: string;
    stock: number;
    brand: string;
    category: string;
  }
}
