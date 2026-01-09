import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counter: number = 0;
  counterSignal = signal(10);

  constructor() {
    // setInterval(() => {
    //   this.counter +=1;
    //   console.log('tick');
    // }, 2000)
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( ( current)=> current + value);
  }


  reset() {
    this.counter = 0;

    this.counterSignal.set(0);
  }
}
