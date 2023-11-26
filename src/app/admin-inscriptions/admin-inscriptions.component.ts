import { Component } from '@angular/core';
import { ins } from '../admin-professeur/inscrs';

@Component({
  selector: 'app-admin-inscriptions',
  templateUrl: './admin-inscriptions.component.html',
  styleUrls: ['./admin-inscriptions.component.scss'],
})
export class AdminInscriptionsComponent {
  inscriptions = ins;
  searchText = '';
}
