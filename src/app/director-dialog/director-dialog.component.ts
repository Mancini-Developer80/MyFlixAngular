import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

/**
 * Represents a dialog component for displaying director-related information.
 * Uses Angular Material's dialog module for modal functionality.
 */
@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html', // External HTML template for rendering dialog content
  styleUrls: ['./director-dialog.component.css'], // Optional styles for customizing appearance
  standalone: true,
  imports: [MatDialogModule, CommonModule], // Enables Angular Material dialog and common module features
})
export class DirectorDialogComponent {
  /**
   * Injects dialog data when the component is initialized.
   *
   * @param data - Data passed to the dialog component, typically director-related information.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
