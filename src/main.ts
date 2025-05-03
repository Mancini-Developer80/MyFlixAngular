// filepath: c:\Users\pc\Desktop\CareerFoundry\AngularMyFlix\myFlix-Angular-client\src\main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      MatDialogModule,
      MatSnackBarModule,
      FormsModule,
      MatCardModule // Ensure MatCardModule is included here
    ),
  ],
}).catch((err) => console.error(err));
