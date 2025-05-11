import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html', // Use external HTML file
  styleUrls: ['./director-dialog.component.css'], // Optional, if you want to style the dialog
  standalone: true,
  imports: [],
})
export class DirectorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
