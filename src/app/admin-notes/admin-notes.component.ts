import { Component } from '@angular/core';
import { exams } from './exams';

@Component({
  selector: 'app-admin-notes',
  templateUrl: './admin-notes.component.html',
  styleUrls: ['./admin-notes.component.scss'],
})
export class AdminNotesComponent {
  inscriptions = exams;
  searchText = '';
}
