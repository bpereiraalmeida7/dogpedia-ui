import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Breed } from '../../shared/models/breed';

@Component({
  selector: 'app-breed-modal',
  standalone: true,
  imports: [],
  templateUrl: './breed-modal.component.html',
  styleUrl: './breed-modal.component.scss'
})
export class BreedModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Breed) {}
}
