import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-native-events',
  templateUrl: './native-events.component.html',
  styleUrls: ['./native-events.component.scss']
})
export class NativeEventsComponent implements OnInit {
  @ViewChild("main") main!: ElementRef;
  a = 1;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.main != undefined)  {
        this.main.nativeElement.innerHTML = 'Hello World'
      }
    }, 200);

    const add = (a: number, b: number) => {
      return a + b
    }
    const divide = function divide(a: number, b: number) {
      return a/b
    }

    add(2, 4)

    console.log("add", add(2,4))
    console.log("divide", divide(2,4))
  }

  clickHandle(event: MouseEvent) {
    console.log('click', event)
  }

  inputHandler(event: Event) {
    const target = event.target as HTMLInputElement
    console.log('inputHandler', target.value)
  }
}
