import { formatCurrency } from './formatters';

/
 * Utility functions for luxury LRP cosmetics application
 * 
 * This module contains utility functions and types specific to the luxury LRP cosmetics brand,
 * ensuring a high-end user experience and consistent branding throughout the application.
 * 
 * @module utils
 */

/
 * Represents a product in the luxury LRP cosmetics line.
 * @interface Product
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Represents a customer in the luxury LRP cosmetics application.
 * @interface Customer
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
}

/
 * Formats a product's price to a string with currency symbol.
 * @param price - The price of the product.
 * @returns A formatted price string.
 */
export function formatProductPrice(price: number): string {
    return formatCurrency(price, 'USD');
}

/
 * Generates a unique identifier for a product.
 * @returns A unique string identifier.
 */
export function generateProductId(): string {
    return luxuryLRP-${Date.now()}-${Math.random().toString(36).substr(2, 9)};
}

/
 * Generates a luxury LRP cosmetics-specific promotional message.
 * @param product - The product to generate a message for.
 * @returns A promotional message string.
 */
export function generatePromotionalMessage(product: Product): string {
    return Indulge in the elegance of ${product.name} from luxury LRP cosmetics. Experience luxury like never before!;
}

/
 * Checks if a product is in stock based on its price.
 * @param product - The product to check.
 * @returns True if the product is in stock, false otherwise.
 */
export function isProductInStock(product: Product): boolean {
    return product.price > 0; // Assuming products with a price greater than 0 are in stock
}

/
 * Formats a customer’s contact information for display.
 * @param customer - The customer whose information is to be formatted.
 * @returns A formatted string of the customer's contact information.
 */
export function formatCustomerContact(customer: Customer): string {
    return ${customer.name} | Email: ${customer.email} | Phone: ${customer.phone};
}

/
 * Luxury LRP cosmetics-specific function to create a new product.
 * @param name - The name of the product.
 * @param description - The description of the product.
 * @param price - The price of the product.
 * @param category - The category of the product.
 * @param imageUrl - The image URL of the product.
 * @returns A new product object.
 */
export function createNewProduct(name: string, description: string, price: number, category: string, imageUrl: string): Product {
    return {
        id: generateProductId(),
        name,
        description,
        price,
        category,
        imageUrl,
    };
}