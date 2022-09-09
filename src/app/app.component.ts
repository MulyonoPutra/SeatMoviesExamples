import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  movieTitle: string = 'Captain America: The Winter Soldier';
  screen: string = 'LUXE CINEMAS';
  time: string = 'FRI, 6:45PM';
  price: number;
  tick: number;
  conv: number;
  seatNumbers: string;
  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pricePerMovies = 20000;

  reserved: any[] = [];
  selected: any[] = [];

  ticketPrice: number = 120;
  convFee: number = 30;
  totalPrice: number = 0;
  currency: string = 'Rp';

  //return status of each seat
  getStatus(seatPos: string) {
    if (this.reserved.findIndex((e) => e.seatNumber == seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.findIndex((e) => e.seatNumber == seatPos) !== -1) {
      return 'selected';
    }
  }

  //clear handler
  clearSelected() {
    this.selected = [];
  }

  total() {
    this.selected.forEach((e) => {
      this.totalPrice += e.price;
    });
  }

  //click handler
  seatClicked(seatPos: string) {
    var index = this.selected.findIndex((e) => e.seatNumber == seatPos);
    console.log(index);
    if (index !== -1) {
      // seat already selected, remove
      this.selected.splice(index, 1);
    } else {
      //push to selected array only if it is not reserved
      if (this.reserved.findIndex((e) => e.seatNumber == seatPos) == -1) {
        this.selected.push({
          user: 'Ady',
          seatNumber: seatPos,
          price: this.pricePerMovies,
        });
      }
    }
    this.selectedItems();
  }

  //Buy button handler
  showSelected() {
    if (this.selected.length > 0) {
      this.price = this.ticketPrice;
      this.tick = this.selected.length;
      this.conv = this.convFee;
    } else {
      alert('No seats selected!');
    }
  }

  pay() {
    this.reserved = [...this.reserved, ...this.selected];
    this.selected = [];
    console.log(this.reserved);
  }

  selectedItems() {
    return this.selected.map((e) => {
      return e.seatNumber;
    });
  }
}
