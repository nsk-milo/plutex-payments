export type CreateOrderType = {
  user_id: number;
  products: {
    product_id: number;
    quantity: number;
  }[];
};
