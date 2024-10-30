import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from '../services/sidebar.service';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

interface SortByOption {
  name: string,
  code: string
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, DividerModule, ButtonModule, SelectButtonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false; 

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisible$.subscribe(
      visible => this.sidebarVisible = visible
    );
  }

  sortBy: SortByOption[] = [
    { name: 'A to Z', code: 'A_TO_Z' },
    { name: 'Z to A', code: 'Z_TO_A'}
  ]

  selectedSortBy: SortByOption | null = this.sortBy[0];

  onSortChange() {
    if (this.selectedSortBy) {
      this.sidebarService.setSortOption(this.selectedSortBy.code);
    }
  }
  
}
