import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html', // Use external HTML file
  styleUrls: ['./director-dialog.component.css'], // Optional, if you want to style the dialog
  standalone: true,
  imports: [MatDialogModule, CommonModule],
})
export class DirectorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
