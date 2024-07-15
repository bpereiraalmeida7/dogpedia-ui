import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BreedCardComponent } from './breed-card.component';
import { BreedModalComponent } from '../breed-modal/breed-modal.component';
import { Breed } from '../../shared/models/breed';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BreedCardComponent', () => {
  let component: BreedCardComponent;
  let fixture: ComponentFixture<BreedCardComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BreedCardComponent, 
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open']) }  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedCardComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);

    const breed: Breed = {
      id: 1,
      name: 'Bulldog',
      image: { url: 'bulldog.jpg' },
      temperament: 'Friendly',
      weight: { imperial: '50 - 60 lbs' },
      height: { imperial: '12 - 15 inches' },
      life_span: '10 - 15 years',
      country_code: 'US'
    };
    component.breed = breed;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal with correct data when openModal is called', () => {
    component.openModal();
    expect(dialog.open).toHaveBeenCalledWith(BreedModalComponent, {
      width: '400px',
      data: component.breed
    });
  });
});
