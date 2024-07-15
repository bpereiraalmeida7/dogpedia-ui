import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Breed } from '../../shared/models/breed';
import { BreedModalComponent } from '../breed-modal/breed-modal.component';


@Component({
  selector: 'app-breed-card',
  standalone: true,
  imports: [ 
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './breed-card.component.html',
  styleUrl: './breed-card.component.scss'
})
export class BreedCardComponent {
  @Input() breed!: Breed;

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(BreedModalComponent, {
      width: '400px',
      data: this.breed
    });
  }
}