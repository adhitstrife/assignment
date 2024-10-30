import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../services/sidebar.service';

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
export class ProductsComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sortOption$.subscribe(sortCode => {
      this.applySort(sortCode);
    });
    this.applySort('A_TO_Z'); // Default sorting
  }

  products: Product[] = [
    { pk: 1, name: 'A Product 1', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10 },
    { pk: 2, name: 'B Product 2', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: 0, valid_until: this.getRandomDate(), low_quantity: 10 },
    { pk: 3, name: 'C Product 3', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10 },
    { pk: 4, name: 'D Product 4', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: 9, valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 5, name: 'E Product 5', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 7, name: 'F Product 7', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 8, name: 'G Product 8', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 9, name: 'H Product 9', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 10, name: 'I Product 10', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 11, name: 'J Product 11', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: 7, valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 12, name: 'K Product 12', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 13, name: 'L Product 13', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 14, name: 'M Product 14', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 15, name: 'N Product 15', points: this.getRandomPoints(), display_image_url: '', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 16, name: 'O Product 16', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
    { pk: 17, name: 'P Product 17', points: this.getRandomPoints(), display_image_url: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', quantity: this.getRandomStock(), valid_until: this.getRandomDate(), low_quantity: 10},
  ];

  selectedPerPage: DropdownItem | undefined;

  sortedProducts: Product[] = [];

  perPage: DropdownItem[] = [
    {label: '5', value: 5},
    {label: '10', value: 10},
    {label: '15', value: 15},
    {label: '20', value: 20},
    {label: '25', value: 25},
  ];

  displayCount: number = 5;

  onSortClick() {
    this.sidebarService.toggleSidebar();
  }

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

  applySort(sortCode: string) {
    this.sortedProducts = this.products.slice().sort((a, b) => {
      if (sortCode === 'A_TO_Z') {
        return a.name.localeCompare(b.name);
      } else if (sortCode === 'Z_TO_A') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }
}
