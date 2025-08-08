export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
    SITE_TITLE: "luxury LRP cosmetics - Elevate Your Beauty",
    TAGLINE: "Indulge in Luxury, Embrace Your Elegance",
    DESCRIPTION: "Discover the finest in luxury cosmetics with luxury LRP cosmetics. Our products are designed to enhance your natural beauty with a touch of elegance.",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/luxurylrpcosmetics",
        FACEBOOK: "https://facebook.com/luxurylrpcosmetics",
        TWITTER: "https://twitter.com/luxurylrpcosmetics",
    },
    CONTACT_EMAIL: "contact@luxurylrpcosmetics.com",
    PHONE_NUMBER: "+1 (800) 123-4567",
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    isFeatured: boolean;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}

export const CATEGORIES: Category[] = [
    { id: "1", name: "Lip Care", description: "Luxurious lip products for a perfect pout." },
    { id: "2", name: "Face Makeup", description: "Elevate your complexion with our premium face makeup." },
    { id: "3", name: "Eye Makeup", description: "Enhance your gaze with our exquisite eye makeup collection." },
];

export const PRODUCTS: Product[] = [
    {
        id: "p1",
        name: "Luxury Lipstick",
        description: "A rich, creamy lipstick that glides on smoothly and provides long-lasting color.",
        price: 35.00,
        imageUrl: "https://example.com/images/luxury-lipstick.jpg",
        category: "Lip Care",
        isFeatured: true,
    },
    {
        id: "p2",
        name: "Silk Foundation",
        description: "A lightweight foundation that offers a flawless finish and all-day wear.",
        price: 50.00,
        imageUrl: "https://example.com/images/silk-foundation.jpg",
        category: "Face Makeup",
        isFeatured: true,
    },
    {
        id: "p3",
        name: "Glamour Eyeshadow Palette",
        description: "A curated collection of luxurious shades to create stunning eye looks.",
        price: 60.00,
        imageUrl: "https://example.com/images/glamour-eyeshadow.jpg",
        category: "Eye Makeup",
        isFeatured: false,
    },
];

export const getFeaturedProducts = (): Product[] => {
    return PRODUCTS.filter(product => product.isFeatured);
};