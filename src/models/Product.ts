

interface Dimensions {
  width: number; 
  height: number; 
  depth: number;
}

interface Reviews {
  rating: number; 
  comment: string; 
  date: string; 
  reviewerName: string; 
  reviewerEmail: string;
}

interface Meta {
  createdAt: string; 
  updatedAt: string; 
  barcode: string;
  qrCode: string;
}

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Reviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;

  constructor (data: {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  tags: string[],
  brand: string,
  sku: string,
  weight: number,
  dimensions: Dimensions,
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: string,
  reviews: Reviews[];
  returnPolicy: string,
  minimumOrderQuantity: number,
  meta: Meta,
  images: string[],
  thumbnail: string}) 
  {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.rating = data.rating;
    this.stock = data.stock;
    this.tags = data.tags;
    this.brand = data.brand;
    this.sku = data.sku;
    this.weight = data.weight;
    this.dimensions = data.dimensions;
    this.warrantyInformation = data.warrantyInformation;
    this.shippingInformation = data.shippingInformation;
    this.availabilityStatus = data.availabilityStatus;
    this.reviews = data.reviews;
    this.returnPolicy = data.returnPolicy;
    this.minimumOrderQuantity = data.minimumOrderQuantity;
    this.meta = data.meta;
    this.images = data.images;
    this.thumbnail = data.thumbnail;
  }

  displayDetails(): string {
    return `
    Id: ${this.id},
    Title: ${this.title}, 
    Description: ${this.description},
    Category: ${this.category},
    Price: $${this.price.toFixed(2)}, 
    Discount: ${this.discountPercentage}%,
    Rating: ${this.rating} / 5,
    Stock: ${this.stock} units remaining,
    Tags: ${this.tags.join(", ")},
    Brand: ${this.brand},
    SKU: ${this.sku},
    Weight: ${this.weight},
    Dimensions: ${this.dimensions.width}W x ${this.dimensions.height}H x ${this.dimensions.depth}D,
    Warranty: ${this.warrantyInformation},
    Shipping: ${this.shippingInformation},
    Availability: ${this.availabilityStatus},
    Reviews: ${JSON.stringify(this.reviews, null, 2)},
    Return Policy: ${this.returnPolicy},
    Min. Order Qty: ${this.minimumOrderQuantity},
    Meta: ${JSON.stringify(this.meta, null, 2)},
    Images: ${this.images.join(", ")},
    Thumbnail: ${this.thumbnail}
    `;
  }

  getPriceWithDiscount(): number {
    return Number((this.price * (1 - this.discountPercentage / 100)).toFixed(2));
  }
}
