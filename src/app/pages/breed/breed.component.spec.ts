import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { BreedComponent } from './breed.component';
import { DogApiService } from '../../shared/services/dog-api.service';
import { BreedCardComponent } from '../../components/breed-card/breed-card.component';

class DogApiServiceMock {
  getBreeds(page: number, limit: number) {
    return of([
      { id: '1', name: 'Bulldog', image: { url: 'bulldog.jpg' }, temperament: 'Friendly', weight: { imperial: '50 - 60 lbs' }, height: { imperial: '12 - 15 inches' }, life_span: '10 - 15 years', country_code: 'US' }
    ]);
  }

  getBreedImages(ids: string[]) {
    return of([[{ url: 'bulldog.jpg' }]]);
  }
}

describe('BreedComponent', () => {
  let component: BreedComponent;
  let fixture: ComponentFixture<BreedComponent>;
  let dogApiService: DogApiServiceMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BreedComponent,
        BreedCardComponent,
        MatGridListModule,
        MatPaginatorModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: DogApiService, useClass: DogApiServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedComponent);
    component = fixture.componentInstance;
    dogApiService = TestBed.inject(DogApiService) as unknown as DogApiServiceMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display breeds on initialization', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.breeds.length).toBeGreaterThan(0);

    const breedCardElement: HTMLElement = fixture.nativeElement.querySelector('app-breed-card');
    expect(breedCardElement).toBeTruthy();
  });

  it('should handle page change and fetch new breeds', () => {
    spyOn(component, 'fetchBreeds').and.callThrough();

    const event: PageEvent = { pageIndex: 1, pageSize: 12, length: 172 };
    component.onPageChange(event);

    expect(component.fetchBreeds).toHaveBeenCalledWith(1, 12);
  });
});
