import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-applied-filters',
  standalone: true,
  imports: [
    ChipModule
  ],
  templateUrl: './applied-filters.component.html',
  styleUrl: './applied-filters.component.css'
})
export class AppliedFiltersComponent {

}
