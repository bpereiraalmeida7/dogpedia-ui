import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Breed } from '../../shared/models/breed';
import { DogApiService } from '../../shared/services/dog-api.service';
import { BreedCardComponent } from '../../components/breed-card/breed-card.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [ 
    BreedCardComponent,
    MatGridListModule,
    MatPaginatorModule
  ],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss'
})
export class BreedComponent {
  breeds: Breed[] = [];
  totalBreeds: number = 0;
  pageSize = 12;
  currentPage = 0;
  cols: number = 6;

  constructor(private dogApiService: DogApiService) {}

  ngOnInit(): void {
    this.fetchBreeds(this.currentPage, this.pageSize);
  }

  fetchBreeds(page: number, limit: number): void {
    this.dogApiService.getBreeds(page, limit).subscribe((data) => {
      const breedIds = data.map(breed => breed.id);
      this.dogApiService.getBreedImages(breedIds).subscribe((images) => {
        this.breeds = data.map((breed, index) => ({
          ...breed,
          image: images[index]?.[0] || { url: 'default-image-url' }
        }));
        this.totalBreeds = 172;
      });
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchBreeds(this.currentPage, this.pageSize);
  }
}
