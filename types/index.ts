import { Product } from './product';
import { User } from './user';

/
 * Represents the luxury LRP cosmetics brand.
 * @interface Brand
 */
export interface Brand {
    name: string; // The name of the brand
    colors: string[]; // The brand colors
}

/
 * Represents a cosmetic product in the luxury LRP cosmetics line.
 * @interface CosmeticProduct
 */
export interface CosmeticProduct extends Product {
    brand: Brand; // The brand of the product
    category: string; // The category of the cosmetic product (e.g., skincare, makeup)
    ingredients: string[]; // List of ingredients used in the product
    luxuryRating: number; // A rating indicating the luxury level of the product (1-5)
}

/
 * Represents a user of the luxury LRP cosmetics website.
 * @interface UserProfile
 */
export interface UserProfile extends User {
    preferredProducts: CosmeticProduct[]; // List of preferred cosmetic products
    purchaseHistory: CosmeticProduct[]; // List of previously purchased products
}

/
 * Represents a shopping cart for luxury LRP cosmetics.
 * @interface ShoppingCart
 */
export interface ShoppingCart {
    user: UserProfile; // The user associated with the shopping cart
    items: CosmeticProduct[]; // List of products in the shopping cart
    totalAmount: number; // Total amount of the shopping cart
}

/
 * Represents the luxury LRP cosmetics brand details.
 * @constant
 */
export const luxuryLRPBrand: Brand = {
    name: "luxury LRP cosmetics",
    colors: ["orange", "white"],
};

/
 * Represents a sample luxury cosmetic product.
 * @constant
 */
export const sampleProduct: CosmeticProduct = {
    id: "001",
    name: "Radiant Glow Serum",
    description: "A luxurious serum that enhances your natural glow.",
    price: 89.99,
    brand: luxuryLRPBrand,
    category: "Skincare",
    ingredients: ["Hyaluronic Acid", "Vitamin C", "Gold Flakes"],
    luxuryRating: 5,
};