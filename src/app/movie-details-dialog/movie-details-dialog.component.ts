import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details-dialog',
  templateUrl: './movie-details-dialog.component.html', // Use external HTML file
  styleUrls: ['./movie-details-dialog.component.css'], // Optional, if you want to style the dialog
  standalone: true,
  imports: [],
})
export class MovieDetailsDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MovieDetailsDialogComponent> // Inject MatDialogRef
  ) {}

  closeDialog(): void {
    this.dialogRef.close(); // Closes the dialog programmatically
  }
}
