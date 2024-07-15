import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Breed } from '../../shared/models/breed';

@Component({
  selector: 'app-breed-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './breed-modal.component.html',
  styleUrl: './breed-modal.component.scss'
})
export class BreedModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Breed) {}
}
