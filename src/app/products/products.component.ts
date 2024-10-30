import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

interface Product {
  pk: number;
  name: string;
  points: number;
  quantity: number;
  display_image_url: string;
  valid_until: string;
  low_quantity: number;
}

interface DropdownItem {
  value: string | number;
  label: string | number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule, ProductCardComponent, DividerModule, DropdownModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    { pk: 1, name: 'Product 1', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10 },
    { pk: 2, name: 'Product 2', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: 0, valid_until: this.getRandomDate(), low_quantity: 10 },
    { pk: 3, name: 'Product 3', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10 },
    { pk: 4, name: 'Product 4', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: 9, valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 5, name: 'Product 5', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 7, name: 'Product 7', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 8, name: 'Product 8', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 9, name: 'Product 9', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 10, name: 'Product 10', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 11, name: 'Product 11', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: 7, valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 12, name: 'Product 12', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 13, name: 'Product 13', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 14, name: 'Product 14', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 15, name: 'Product 15', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 16, name: 'Product 16', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 17, name: 'Product 17', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
  ];

  selectedPerPage: DropdownItem | undefined;

  perPage: DropdownItem[] = [
    {label: '5', value: 5},
    {label: '10', value: 10},
    {label: '15', value: 15},
    {label: '20', value: 20},
    {label: '25', value: 25},
  ];

  displayCount: number = 5;

  getRandomPoints(): number {
    return Math.floor(Math.random() * (500 - 50 + 1)) + 50; // Generates a price between 50 and 500
  }

  getRandomStock(): number {
    return Math.floor(Math.random() * 100) + 1; // Generates stock between 1 and 100
  }

  getRandomDate(): string {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() + 3); // Start from 3 months after today

    // Generate a random date within a year from the start date
    const endDate = new Date(startDate);
    endDate.setFullYear(endDate.getFullYear() + 1);

    const randomDate = new Date(
      startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
    );

    return randomDate.toISOString().split('.')[0]; // Format: "YYYY-MM-DDTHH:MM:SS"
  }

  getProductCount(): number {
    return this.products.length;
  }

  get displayedProducts(): Product[] {
    return this.products.slice(0, this.displayCount);
  }

  setDisplayCount(count: DropdownItem): void {
    this.displayCount = count.value as number;
  }
}
