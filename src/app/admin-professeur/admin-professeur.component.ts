import { Component, OnInit } from '@angular/core';
import { AdminProfServiceService } from '../services/admin-prof-service.service';

@Component({
  selector: 'app-admin-professeur',
  templateUrl: './admin-professeur.component.html',
  styleUrls: ['./admin-professeur.component.scss'],
})
export class AdminProfesseurComponent implements OnInit {
  profs: any[] = [];
  add: any = {};
  addMode = false;
  constructor(private service: AdminProfServiceService) {}
  searchText: string = '';
  ngOnInit(): void {
    this.loadProfs();
  }
  get getProfs() {
    return this.profs.filter((prof: any) => {
      const searchText = this.searchText.toLowerCase();
      return prof.fullName.toLowerCase().includes(searchText); //||
      // prof.cin.toLowerCase().includes(searchText) ||
      // prof.email.toLowerCase().includes(searchText) ||
      // prof.compteurs[0].numpark.toLowerCase().includes(searchText)
    });
  }

  loadProfs() {
    this.service.getAllProfs().subscribe(
      (data: any) => {
        this.profs = data;
      },
      (x) => {
        console.error(x);
      },
      () => {}
    );
  }
}
