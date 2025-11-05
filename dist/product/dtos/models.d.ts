export type CreateProductType = {
    name: string;
    description: string;
    price: number;
    seller_id: string;
    stock: number;
    image_url?: string;
    category_id: number;
};
