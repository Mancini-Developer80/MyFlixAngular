import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

/**
 * Represents a dialog component for displaying genre-related information.
 * Uses Angular Material's dialog module for modal functionality.
 */
@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrls: ['./genre-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule], // Import MatDialogModule to enable mat-dialog-close
})
export class GenreDialogComponent {
  /**
   * Injects dialog data when the component is initialized.
   *
   * @param data - Data passed to the dialog component, typically genre-related information.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
