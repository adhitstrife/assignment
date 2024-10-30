// sidebar.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);

  sidebarVisible$ = this.sidebarVisible.asObservable();


  sortOption$ = new BehaviorSubject<string>('A_TO_Z');

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  setSortOption(sortCode: string) {
    this.sortOption$.next(sortCode);
  }
}
