import { Component, inject, OnInit } from '@angular/core';
import { AirbnbService } from '../services/airbnb.service';
import { Bnb } from '../models/airbnb';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bnbs: Bnb[] = [];

  private airbnbService = inject(AirbnbService);


  constructor() { }

  ngOnInit(): void {
    this.airbnbService.getBnbs().subscribe({
      next: (data) => {
        this.bnbs = data; 
        console.log('Data:', data);
        // Assign API data to bnbs
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }
}
