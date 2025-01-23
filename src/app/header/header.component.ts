import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showWhere = false;
  showCheckIn = false;
  showCheckOut = false;
  showWho = false;


  toggleWhere() {
    this.showWhere = !this.showWhere;
    this.closeOthers('where');
  }


  // Toggle the visibility of "Check In" calendar
  toggleCheckIn() {
    this.showCheckIn = !this.showCheckIn;
    this.closeOthers('checkIn');
  }

  // Toggle the visibility of "Check Out" calendar
  toggleCheckOut() {
    this.showCheckOut = !this.showCheckOut;
    this.closeOthers('checkOut');
  }

  // Toggle the visibility of "Who" dropdown
  toggleWho() {
    this.showWho = !this.showWho;
    this.closeOthers('who');
  }

  // Close other dropdowns and calendars when one is opened
  closeOthers(except: string) {
    if (except !== 'where') {
      this.showWhere = false;
    }
    if (except !== 'checkIn') {
      this.showCheckIn = false;
    }
    if (except !== 'checkOut') {
      this.showCheckOut = false;
    }
    if (except !== 'who') {
      this.showWho = false;
    }
  }

  // Close all dropdowns and calendars (optional, for example, on clicking outside)
  closeAll() {
    this.showWhere = false;
    this.showCheckIn = false;
    this.showCheckOut = false;
    this.showWho = false;
  }
}
