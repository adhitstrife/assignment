import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface Product {
  pk: number;
  name: string;
  points: number;
  quantity: number;
  display_image_url: string;
  valid_until: string;
  low_quantity: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, TagModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
