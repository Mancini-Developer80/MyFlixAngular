import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * Component for displaying detailed information about a movie in a dialog.
 * Uses Angular Material's dialog module for modal functionality.
 */
@Component({
  selector: 'app-movie-details-dialog',
  templateUrl: './movie-details-dialog.component.html', // External HTML template for rendering dialog content
  styleUrls: ['./movie-details-dialog.component.css'], // Optional styles for customizing appearance
  standalone: true,
  imports: [],
})
export class MovieDetailsDialogComponent {
  /**
   * Creates an instance of MovieDetailsDialogComponent.
   *
   * @param data - Data passed to the dialog component, typically movie-related details.
   * @param dialogRef - Reference to the opened dialog, allowing programmatic control.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MovieDetailsDialogComponent>
  ) {}

  /**
   * Closes the dialog programmatically.
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
