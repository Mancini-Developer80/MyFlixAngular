import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrls: ['./genre-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule], // Import MatDialogModule to enable mat-dialog-close
})
export class GenreDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
