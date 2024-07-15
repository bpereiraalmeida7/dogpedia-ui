import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BreedModalComponent } from './breed-modal.component';
import { Breed } from '../../shared/models/breed';

describe('BreedModalComponent', () => {
  let component: BreedModalComponent;
  let fixture: ComponentFixture<BreedModalComponent>;

  beforeEach(async () => {
    const breedData: Breed = {
      id: 1,
      name: 'Bulldog',
      image: { url: 'bulldog.jpg' },
      temperament: 'Friendly',
      weight: { imperial: '50 - 60 lbs' },
      height: { imperial: '12 - 15 inches' },
      life_span: '10 - 15 years',
      country_code: 'US'
    };

    await TestBed.configureTestingModule({
      imports: [BreedModalComponent, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: breedData }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
